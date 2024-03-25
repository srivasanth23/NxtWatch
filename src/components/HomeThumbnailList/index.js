import NxtWatchContext from '../../context/NxtWatchContext'
import HomeEachThumbnail from '../HomeEachThumbnail'
import {
  HomeVideoUnorderedList,
  NoSearchImg,
  NoSearchItemCon,
  NoSearchHeading,
  NoSearchmsg,
  RetryButton,
} from './styledComponents'

const HomeThumbnailList = props => {
  const {videosList, onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return videosList.length > 0 ? (
          <HomeVideoUnorderedList>
            {videosList.map(each => (
              <HomeEachThumbnail videoDetails={each} key={each.id} />
            ))}
          </HomeVideoUnorderedList>
        ) : (
          <NoSearchItemCon>
            <NoSearchImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoSearchHeading isDark={isDark}>
              No Search results found
            </NoSearchHeading>
            <NoSearchmsg>
              Try different key words or remove search filter
            </NoSearchmsg>
            <RetryButton onClick={onClickRetry}> Retry </RetryButton>
          </NoSearchItemCon>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default HomeThumbnailList
