import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBarContainer = styled.div`
  height: 10vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  background-color: ${props => (props.isDark ? '#231f20' : '#ffffff')};
  position: fixed;
  @media all and (max-width: 767px) {
    padding: 0px 10px;
  }
`
export const RenderMobileView = styled.div`
  display: none;
  @media all and (max-width: 767px) {
    display: flex;
  }
`

export const LogoImage = styled.img`
  height: 50px;
  width: 70%;
  @media all and (max-width: 767px) {
    width: 50%;
    height: 50%;
  }
`
export const ListDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
`
export const ProfileImage = styled.img`
  height: 35px;
  width: 35px;
  margin: 0px 30px;
  @media all and (max-width: 767px) {
    display: none;
  }
`
export const PopupLogOutButton = styled.button`
  background: transparent;
  border: 1px solid ${props => (props.isDark ? '#f1f1f1' : '#3b82f6')};
  color: ${props => (props.isDark ? '#f1f1f1' : '#3b82f6')};
  border-radius: 6px;
  padding: 7px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 0px;
  @media all and (max-width: 767px) {
    display: none;
  }
`
export const MobilePopupLogOutButton = styled.button`
  display: none;
  @media all and (max-width: 767px) {
    background: transparent;
    cursor: pointer;
    display: flex;
    border: none;
  }
`

export const LogoutPopUpCon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: ${props => (props.isDark ? '#231f20' : '#f5f0f0')};
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media screen and (max-width:767px){
      width : 300px
  }
}
`
export const MobileLogoutPopUpCon = styled(LogoutPopUpCon)`
  padding: 20px;
`

export const LogOutHeading = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
  font-size: 20px;
  margin-bottom: 30px;
`
export const PopupButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CancelButton = styled.button`
  background-color: transparent;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${props => (props.isDark ? '#d7dfe9' : 'black')};
  font-weight: 500;
  border-radius: 6px;
  color: ${props => (props.isDark ? '#d7dfe9' : 'balck')};
  cursor: pointer;
  margin-right: 70px;
`
export const LogoutButton = styled.button`
  background-color: #3b82f6;
  padding: 10px;
  font-size: 16px;
  border: none;
  margin-right: 10px;
  font-weight: 500;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
`
export const MobileContentView = styled.div`
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const UnorderedListCon = styled.ul`
  list-style: none;
  padding: 0px;
`
export const ListElemnet = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 50px;
  align-items: center;
  width: 100vw;
  color: ${props => (props.isDark ? '#f1f1f1' : '#181818')};
  background-color: ${props => props.isActive};
`
export const SidebarListItemName = styled.h1`
  font-size: 20px;
  margin-left: 10px;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`
export const CloseButton = styled.button`
  background-color: transparent;
  padding: 10px;
  font-size: 16px;
  border: none;
  margin-right: 10px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  align-self: flex-end;
`
