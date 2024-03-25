import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'
import LoaderView from '../LoaderView'
import FailureView from '../FailureView'

import {
  VideoContainer,
  VideoItemContainer,
  VideoTitle,
  VideoCard,
  VideoDetailsCon,
  VideoCountDetail,
  VideoButtonsContainer,
  VideoBtn,
  VideoDetailsCard,
  VideoLogo,
  VideoDetailsConBottom,
  VideoChannelTitle,
  VideoDescription,
} from './styledComponent'

const apiStatusInfo = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItem extends Component {
  state = {
    videoItemDetails: {},
    apiStatus: apiStatusInfo.initial,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onRetry() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusInfo.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const formatData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        apiStatus: apiStatusInfo.success,
        videoItemDetails: formatData,
      })
    } else {
      this.setState({apiStatus: apiStatusInfo.failure})
    }
  }

  onClickLikeBtn = () => {
    const {isDisLiked} = this.state
    if (isDisLiked) {
      this.setState({
        isDisLiked: false,
        isLiked: true,
      })
    } else {
      this.setState(prevState => ({
        isLiked: !prevState.isLiked,
      }))
    }
  }

  onClickDislikeBtn = () => {
    const {isLiked} = this.state
    if (isLiked) {
      this.setState({
        isLiked: false,
        isDisLiked: true,
      })
    } else {
      this.setState(prevState => ({
        isDisLiked: !prevState.isDisLiked,
      }))
    }
  }

  renderSuccessView = () => {
    const {videoItemDetails, isLiked, isDisLiked} = this.state
    const {title, videoUrl, publishedAt, description} = videoItemDetails
    const {channel, viewCount} = videoItemDetails

    const publishedTime = formatDistanceToNow(new Date(publishedAt))
    const likeIconColor = isLiked ? '#2563eb' : '#64748b'
    const dislikeIconColor = isDisLiked ? '#2563eb' : '#64748b'

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, addToSavedVideos, savedVideos} = value

          let isSaved
          const index = savedVideos.findIndex(
            each => each.id === videoItemDetails.id,
          )

          if (index === -1) {
            isSaved = false
          } else {
            isSaved = true
          }

          const saveIconColor = isSaved ? '#2563eb' : '#64748b'
          const saveBtnText = isSaved ? 'Saved' : 'Save'

          const onClickSaveBtn = () => {
            addToSavedVideos(videoItemDetails)
          }

          return (
            <VideoCard>
              <ReactPlayer
                url={videoUrl}
                controls
                width="100%"
                height="450px"
                fluid
              />
              <VideoTitle isDark={isDark}>{title}</VideoTitle>
              <VideoDetailsCon>
                <VideoCountDetail>
                  {viewCount} views . {publishedTime}
                </VideoCountDetail>
                <VideoButtonsContainer>
                  <VideoBtn
                    type="button"
                    isDark={isDark}
                    onClick={this.onClickLikeBtn}
                    color={likeIconColor}
                  >
                    <AiOutlineLike size={20} /> Like
                  </VideoBtn>
                  <VideoBtn
                    type="button"
                    isDark={isDark}
                    onClick={this.onClickDislikeBtn}
                    color={dislikeIconColor}
                  >
                    <AiOutlineDislike size={20} />
                    Dislike
                  </VideoBtn>
                  <VideoBtn
                    type="button"
                    isDark={isDark}
                    onClick={onClickSaveBtn}
                    color={saveIconColor}
                  >
                    <CgPlayListAdd size={20} /> {saveBtnText}
                  </VideoBtn>
                </VideoButtonsContainer>
              </VideoDetailsCon>
              <hr width="100%" border="1px solid #909090" />
              <VideoDetailsCard>
                <VideoLogo src={channel.profileImageUrl} alt="channel logo" />
                <VideoDetailsConBottom>
                  <VideoChannelTitle isDark={isDark}>
                    {channel.name}
                  </VideoChannelTitle>
                  <VideoCountDetail>
                    {channel.subscriberCount} subscribers
                  </VideoCountDetail>
                </VideoDetailsConBottom>
              </VideoDetailsCard>
              <VideoDescription isDark={isDark}>{description}</VideoDescription>
            </VideoCard>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderResult = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusInfo.inProgress:
        return <LoaderView />
      case apiStatusInfo.failure:
        return <FailureView onRetry={this.onRetry} />
      case apiStatusInfo.success:
        return this.renderSuccessView()
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
              <VideoContainer data-testid="videoItemDetails" isDark={isDark}>
                <SideBar />
                <VideoItemContainer
                  data-testid="videoItemDetails"
                  isDark={isDark}
                >
                  {this.renderResult()}
                </VideoItemContainer>
              </VideoContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItem
