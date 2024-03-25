import {Component} from 'react'
import {FaFire} from 'react-icons/fa'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'
import LoaderView from '../LoaderView'
import FailureView from '../FailureView'
import TrendingVideoItem from '../TrendingVideoItem'

import {
  AppContainer,
  MainTrendingContainer,
  TabHeaderCon,
  TrendingIconCon,
  TrendingBannerText,
  TrendingUl,
} from './styledComponents'

const apiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideosList: [],
    apiStatus: apiStatusList.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusList.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const formattedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
      }))
      this.setState({
        trendingVideosList: formattedData,
        apiStatus: apiStatusList.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusList.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {trendingVideosList} = this.state
    return (
      <TrendingUl>
        {trendingVideosList.map(each => (
          <TrendingVideoItem videoDetails={each} key={each.id} />
        ))}
      </TrendingUl>
    )
  }

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusList.inProgress:
        return <LoaderView />
      case apiStatusList.success:
        return this.renderSuccessView()
      case apiStatusList.failure:
        return <FailureView onRetry={this.onRetry} />
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Header />
              <AppContainer>
                <SideBar />
                <MainTrendingContainer data-testid="trending" isDark={isDark}>
                  <TabHeaderCon isDark={isDark}>
                    <TrendingIconCon isDark={isDark}>
                      <FaFire size={40} color="#ff0b37" />
                    </TrendingIconCon>
                    <TrendingBannerText isDark={isDark}>
                      Trending
                    </TrendingBannerText>
                  </TabHeaderCon>
                  {this.renderTrendingVideos()}
                </MainTrendingContainer>
              </AppContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
