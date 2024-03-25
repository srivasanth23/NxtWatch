import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoSearch} from 'react-icons/io5'
import {IoMdClose} from 'react-icons/io'
import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'
import LoaderView from '../LoaderView'
import FailureView from '../FailureView'
import HomeThumbnailList from '../HomeThumbnailList'

import {
  AppContainer,
  MainHomeContainer,
  BannerContainer,
  NxtWatchLogo,
  BannerPara,
  BannerLeftContainer,
  BannerButton,
  BannerRightContainer,
  SearchInputContainer,
  SearchElement,
  SearchIconButton,
} from './styledComponents'

const apiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    bannerDisplay: 'flex',
    videosList: [],
    searchInput: '',
    apiStatus: apiStatusList.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusList.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videosList: formattedData,
        apiStatus: apiStatusList.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusList.failure,
      })
    }
  }

  onClickBannerCloseBtn = () => {
    this.setState({
      bannerDisplay: 'none',
    })
  }

  renderBannerElement = () => {
    const {bannerDisplay} = this.state
    const display = bannerDisplay

    return (
      <BannerContainer display={display} data-testid="banner">
        <BannerLeftContainer>
          <NxtWatchLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerPara>Buy Nxt Watch Premium</BannerPara>
          <BannerButton type="button">GET IT NOW</BannerButton>
        </BannerLeftContainer>
        <BannerRightContainer
          onClick={this.onClickBannerCloseBtn}
          data-testid="close"
        >
          <IoMdClose size={30} />
        </BannerRightContainer>
      </BannerContainer>
    )
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onKeyDownSearchInput = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  getSearchResults = () => {
    this.getVideos()
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return <HomeThumbnailList videosList={videosList} onRetry={this.onRetry} />
  }

  renderHomeView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusList.inProgress:
        return <LoaderView />
      case apiStatusList.failure:
        return <FailureView onRetry={this.onRetry} />
      case apiStatusList.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Header />
              <AppContainer>
                <SideBar />
                <MainHomeContainer data-testid="home" isDark={isDark}>
                  {this.renderBannerElement()}
                  <SearchInputContainer isDark={isDark}>
                    <SearchElement
                      type="search"
                      onChange={this.onChangeSearchInput}
                      onKeyDown={this.onKeyDownSearchInput}
                      value={searchInput}
                      placeholder="Search"
                    />
                    <SearchIconButton
                      type="button"
                      onClick={this.getSearchResults}
                      isDark={isDark}
                      data-testid="searchButton"
                    >
                      {' '}
                      <IoSearch size={25} color={isDark ? 'white' : 'black'} />
                    </SearchIconButton>
                  </SearchInputContainer>
                  {this.renderHomeView()}
                </MainHomeContainer>
              </AppContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
