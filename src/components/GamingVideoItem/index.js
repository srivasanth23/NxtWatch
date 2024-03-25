import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LinkElement,
  ListElemenet,
  GameingVideoImg,
  GamingVideoDetails,
  GameTitle,
  Gamep,
} from './styledComponent'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <LinkElement to={`/videos/${id}`}>
            <ListElemenet>
              <GameingVideoImg src={thumbnailUrl} alt="video thumbnail" />
              <GamingVideoDetails>
                <GameTitle isDark={isDark}> {title}</GameTitle>
                <Gamep> {viewCount} Watching Worldwide</Gamep>
              </GamingVideoDetails>
            </ListElemenet>
          </LinkElement>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideoItem
