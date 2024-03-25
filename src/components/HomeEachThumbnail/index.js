import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LinkElement,
  ListItem,
  Thumbnail,
  ThumbnailDetilsCon,
  LogoImage,
  DetailsCon,
  Title,
  ChannelName,
  MoreDetails,
} from './styledComponents'

const HomeEachThumbnail = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount, channel} = videoDetails
  const {publishedAt} = videoDetails

  const publishedTime = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <LinkElement to={`/videos/${id}`}>
            <ListItem>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <ThumbnailDetilsCon>
                <LogoImage src={channel.profileImageUrl} alt="channel logo" />
                <DetailsCon>
                  <Title isDark={isDark}> {title} </Title>
                  <ChannelName> {channel.name} </ChannelName>
                  <MoreDetails>
                    {viewCount} views . {publishedTime} ago
                  </MoreDetails>
                </DetailsCon>
              </ThumbnailDetilsCon>
            </ListItem>
          </LinkElement>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default HomeEachThumbnail
