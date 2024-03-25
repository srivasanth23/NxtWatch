import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'

import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'
import LoaderView from '../LoaderView'
import FailureView from '../FailureView'
import GamingVideoItem from '../GamingVideoItem'

import {
  AppContainer,
  ManiGamingCon,
  TabHeaderCon,
  GamingIconCon,
  GamingBanner,
  GamingUl,
} from './styledComponents'

const apiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideoList: [],
    apiStatus: apiStatusList.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusList.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
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
      }))
      this.setState({
        gamingVideoList: formattedData,
        apiStatus: apiStatusList.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusList.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {gamingVideoList} = this.state
    return (
      <GamingUl>
        {gamingVideoList.map(each => (
          <GamingVideoItem videoDetails={each} key={each.id} />
        ))}
      </GamingUl>
    )
  }

  onRetry = () => {
    this.getGamingVideos()
  }

  renderGamingVideos = () => {
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
                <ManiGamingCon data-testid="gaming" isDark={isDark}>
                  <TabHeaderCon isDark={isDark}>
                    <GamingIconCon isDark={isDark}>
                      <SiYoutubegaming size={40} color="#ff0b37" />
                    </GamingIconCon>
                    <GamingBanner isDark={isDark}>Gaming</GamingBanner>
                  </TabHeaderCon>
                  {this.renderGamingVideos()}
                </ManiGamingCon>
              </AppContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
