import {formatDistanceToNow} from 'date-fns'

import {
  TrendingVideoLink,
  TrendingVideoListItem,
  TrendingVideoImg,
  TrendingVideoItemCard,
  TrendingVideoChannelLogo,
  TrendingVideoItemDetailsCon,
  TrendingVideoTitle,
  TrendingVideoItemDetailsCard,
  TrendingVideoItemDetail,
  Dot,
} from './styledComponent'
import NxtWatchContext from '../../context/NxtWatchContext'

const TrendingVideoItem = props => {
  const {videoDetails} = props
  const {id, title, channel, thumbnailUrl} = videoDetails
  const {viewCount, publishedAt} = videoDetails
  const publishedTime = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <TrendingVideoLink to={`/videos/${id}`}>
            <TrendingVideoListItem>
              <TrendingVideoImg src={thumbnailUrl} alt="video thumbnail" />
              <TrendingVideoItemCard>
                <TrendingVideoChannelLogo
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <TrendingVideoItemDetailsCon>
                  <TrendingVideoTitle isDark={isDark}>
                    {title}
                  </TrendingVideoTitle>
                  <TrendingVideoItemDetailsCard>
                    <TrendingVideoItemDetail>
                      {channel.name} <Dot>.</Dot>
                    </TrendingVideoItemDetail>
                    <TrendingVideoItemDetail>
                      {viewCount} views . {publishedTime}
                    </TrendingVideoItemDetail>
                  </TrendingVideoItemDetailsCard>
                </TrendingVideoItemDetailsCon>
              </TrendingVideoItemCard>
            </TrendingVideoListItem>
          </TrendingVideoLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideoItem
