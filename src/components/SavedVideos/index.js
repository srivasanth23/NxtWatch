import {CgPlayListAdd} from 'react-icons/cg'
import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'
import TrendingVideoItem from '../TrendingVideoItem'

import {
  AppContainer,
  MainTrendingContainer,
  NoSavedVideosView,
  NoSavedVideosImg,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
  SavedVideosUl,
  TabHeaderCon,
  SavedVideosIconCon,
  SavedText,
} from './styledComponents'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, savedVideos} = value

      return (
        <>
          <Header />
          <AppContainer>
            <SideBar />
            <MainTrendingContainer data-testid="savedVideos" isDark={isDark}>
              {savedVideos.length > 0 ? (
                <>
                  <TabHeaderCon isDark={isDark}>
                    <SavedVideosIconCon isDark={isDark}>
                      <CgPlayListAdd size={40} color="#ff0b37" />
                    </SavedVideosIconCon>
                    <SavedText isDark={isDark}>Saved Videos</SavedText>
                  </TabHeaderCon>
                  <SavedVideosUl>
                    {savedVideos.map(each => (
                      <TrendingVideoItem videoDetails={each} key={each.id} />
                    ))}
                  </SavedVideosUl>
                </>
              ) : (
                <NoSavedVideosView>
                  <NoSavedVideosImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideosHeading isDark={isDark}>
                    No saved videos found
                  </NoSavedVideosHeading>
                  <NoSavedVideosDescription isDark={isDark}>
                    You can save your videos while watching them
                  </NoSavedVideosDescription>
                </NoSavedVideosView>
              )}
            </MainTrendingContainer>
          </AppContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
