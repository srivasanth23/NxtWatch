import {Link, withRouter} from 'react-router-dom'
import {FaMoon, FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {IoSunnyOutline, IoLogOutOutline} from 'react-icons/io5'
import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdHome} from 'react-icons/md'
import {CgPlayListAdd} from 'react-icons/cg'

import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'

import {
  NavBarContainer,
  RenderMobileView,
  LogoImage,
  ListDivContainer,
  ThemeButton,
  ProfileImage,
  PopupLogOutButton,
  LogoutPopUpCon,
  LogOutHeading,
  PopupButtonsContainer,
  CancelButton,
  LogoutButton,
  MobilePopupLogOutButton,
  MobileLogoutPopUpCon,
  MobileContentView,
  UnorderedListCon,
  ListElemnet,
  SidebarListItemName,
  LinkItem,
  CloseButton,
} from './styledComponents'

const Header = props => {
  const logoutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, toggleTheme, activeTab, changeActiveTab} = value

        const renderThemeButton = isDark ? (
          <IoSunnyOutline size={30} color="#ffffff" />
        ) : (
          <FaMoon size={30} color="#181818" />
        )

        const onClickThemeChange = () => {
          toggleTheme()
        }

        const homeAsActiveTab = () => {
          changeActiveTab('Home')
        }

        const trendingAsActiveTab = () => {
          changeActiveTab('Trending')
        }

        const gamingAsActiveTab = () => {
          changeActiveTab('Gaming')
        }

        const savedVideosAsActiveTab = () => {
          changeActiveTab('SavedVideos')
        }

        const activeTabBgColor = isDark ? '#475569' : '#cbd5e1'

        const renderMobileView = () => (
          <RenderMobileView>
            <Popup
              modal
              trigger={
                <GiHamburgerMenu
                  size={30}
                  color={isDark ? 'white' : 'black'}
                  className="hamburger"
                />
              }
              className="popup-container"
            >
              {close => (
                <MobileContentView isDark={isDark}>
                  <CloseButton
                    type="button"
                    aria-label="icon"
                    onClick={() => close()}
                  >
                    <IoMdClose size={30} color={isDark ? 'white' : 'black'} />
                  </CloseButton>
                  <UnorderedListCon>
                    <LinkItem to="/" onClick={() => close()}>
                      <ListElemnet
                        isDark={isDark}
                        isActive={
                          activeTab === 'Home' ? activeTabBgColor : 'null'
                        }
                        onClick={homeAsActiveTab}
                      >
                        <MdHome size={30} color="#ff0000" />
                        <SidebarListItemName>Home</SidebarListItemName>
                      </ListElemnet>
                    </LinkItem>
                    <LinkItem to="/trending" onClick={() => close()}>
                      <ListElemnet
                        isDark={isDark}
                        isActive={
                          activeTab === 'Training' ? activeTabBgColor : 'null'
                        }
                        onClick={trendingAsActiveTab}
                      >
                        <FaFire size={20} color="#ff0000" />
                        <SidebarListItemName>Trending</SidebarListItemName>
                      </ListElemnet>
                    </LinkItem>
                    <LinkItem to="/gaming" onClick={() => close()}>
                      <ListElemnet
                        isDark={isDark}
                        isActive={
                          activeTab === 'Gaming' ? activeTabBgColor : 'null'
                        }
                        onClick={gamingAsActiveTab}
                      >
                        <SiYoutubegaming size={30} color="#ff0000" />
                        <SidebarListItemName>Gaming</SidebarListItemName>
                      </ListElemnet>
                    </LinkItem>
                    <LinkItem to="/saved-videos" onClick={() => close()}>
                      <ListElemnet
                        isDark={isDark}
                        isActive={
                          activeTab === 'SavedVideos'
                            ? activeTabBgColor
                            : 'null'
                        }
                        onClick={savedVideosAsActiveTab}
                      >
                        <CgPlayListAdd size={30} color="#ff0000" />
                        <SidebarListItemName>Saved Videos</SidebarListItemName>
                      </ListElemnet>
                    </LinkItem>
                  </UnorderedListCon>
                </MobileContentView>
              )}
            </Popup>
          </RenderMobileView>
        )

        const renderLogoutButton = () => (
          <>
            <Popup
              modal
              trigger={
                <PopupLogOutButton type="button" isDark={isDark}>
                  Logout
                </PopupLogOutButton>
              }
              className="popup-container"
            >
              {close => (
                <LogoutPopUpCon isDark={isDark}>
                  <LogOutHeading isDark={isDark}>
                    Are you sure, you want to logout
                  </LogOutHeading>
                  <PopupButtonsContainer isDark={isDark}>
                    <CancelButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                      isDark={isDark}
                    >
                      Cancel
                    </CancelButton>
                    <LogoutButton type="button" onClick={logoutButton}>
                      Confirm
                    </LogoutButton>
                  </PopupButtonsContainer>
                </LogoutPopUpCon>
              )}
            </Popup>
            <Popup
              modal
              className="popup-container"
              trigger={
                <MobilePopupLogOutButton type="button" isDark={isDark}>
                  <IoLogOutOutline
                    size={30}
                    color={isDark ? 'white' : 'black'}
                  />{' '}
                </MobilePopupLogOutButton>
              }
            >
              {close => (
                <MobileLogoutPopUpCon isDark={isDark}>
                  <LogOutHeading isDark={isDark}>
                    Are you sure, you want to logout
                  </LogOutHeading>
                  <PopupButtonsContainer isDark={isDark}>
                    <CancelButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                      isDark={isDark}
                    >
                      Cancel
                    </CancelButton>
                    <LogoutButton type="button" onClick={logoutButton}>
                      Logout
                    </LogoutButton>
                  </PopupButtonsContainer>
                </MobileLogoutPopUpCon>
              )}
            </Popup>
          </>
        )

        return (
          <NavBarContainer isDark={isDark}>
            <Link to="/">
              <LogoImage
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <ListDivContainer>
              <ThemeButton
                type="button"
                value={isDark}
                aria-label="icon"
                data-testid="theme"
                onClick={onClickThemeChange}
              >
                {renderThemeButton}
              </ThemeButton>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              {renderMobileView()}
              {renderLogoutButton()}
            </ListDivContainer>
          </NavBarContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
