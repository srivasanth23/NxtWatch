import {MdHome} from 'react-icons/md'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  DesktopSidebar,
  UnorderedListContent,
  LinkElement,
  ListElement,
  SidebarListItemName,
  SideBarBottomCon,
  BottomHeading,
  SocialMediaIconsContainer,
  SocialMediaIcon,
  BottomContainerMsg,
} from './styledComponents'

const SideBar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {activeTab, isDark, changeActiveTab} = value

      const activeTabBgColor = isDark ? '#475569' : '#cbd5e1'

      const homeAsActiveTab = () => {
        changeActiveTab('Home')
      }

      const trendingAsActiveTab = () => {
        changeActiveTab('Trending')
      }

      const GamingAsActiveTab = () => {
        changeActiveTab('Gaming')
      }

      const savedVideiosAsActiveTab = () => {
        changeActiveTab('SavedVideos')
      }

      console.log(activeTab)

      return (
        <DesktopSidebar isDark={isDark}>
          <UnorderedListContent>
            <LinkElement to="/">
              <ListElement
                isDark={isDark}
                onClick={homeAsActiveTab}
                isActive={activeTab === 'Home' ? activeTabBgColor : 'null'}
              >
                <MdHome
                  size={30}
                  color={activeTab === 'Home' ? '#ff0000' : '#7e858e'}
                />
                <SidebarListItemName fontWeight={activeTab === 'Home'}>
                  Home
                </SidebarListItemName>
              </ListElement>
            </LinkElement>
            <LinkElement to="/trending">
              <ListElement
                isDark={isDark}
                onClick={trendingAsActiveTab}
                isActive={activeTab === 'Trending' ? activeTabBgColor : 'null'}
              >
                <FaFire
                  size={25}
                  color={activeTab === 'Trending' ? '#ff0000' : '#7e858e'}
                />
                <SidebarListItemName fontWeight={activeTab === 'Trending'}>
                  Trending{' '}
                </SidebarListItemName>
              </ListElement>
            </LinkElement>
            <LinkElement to="/gaming">
              <ListElement
                isDark={isDark}
                onClick={GamingAsActiveTab}
                isActive={activeTab === 'Gaming' ? activeTabBgColor : 'null'}
              >
                <SiYoutubegaming
                  size={30}
                  color={activeTab === 'Gaming' ? '#ff0000' : '#7e858e'}
                />
                <SidebarListItemName fontWeight={activeTab === 'Gaming'}>
                  Gaming
                </SidebarListItemName>
              </ListElement>
            </LinkElement>
            <LinkElement to="/saved-videos">
              <ListElement
                isDark={isDark}
                onClick={savedVideiosAsActiveTab}
                isActive={
                  activeTab === 'SavedVideos' ? activeTabBgColor : 'null'
                }
              >
                <CgPlayListAdd
                  size={30}
                  color={activeTab === 'SavedVideos' ? '#ff0000' : '#7e858e'}
                />
                <SidebarListItemName fontWeight={activeTab === 'SavedVideos'}>
                  Saved Videos{' '}
                </SidebarListItemName>
              </ListElement>
            </LinkElement>
          </UnorderedListContent>
          <SideBarBottomCon>
            <BottomHeading isDark={isDark}> CONTACT US </BottomHeading>
            <SocialMediaIconsContainer>
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaIconsContainer>
            <BottomContainerMsg isDark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </BottomContainerMsg>
          </SideBarBottomCon>
        </DesktopSidebar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SideBar
