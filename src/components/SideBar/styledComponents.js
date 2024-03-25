import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const DesktopSidebar = styled.div`
  background-color: ${props => (props.isDark ? '#231f20' : '#ffffff')};
  height: 90vh;
  margin-top: 10vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  padding-bottom: 30px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const UnorderedListContent = styled.ul`
  list-style: none;
  padding: 0;
`
export const LinkElement = styled(Link)`
  text-decoration: none;
`

export const ListElement = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 5px;
  align-items: center;
  width: 100%;
  padding-left: 30px;
  background-color: ${props => props.isActive};
  color: ${props => (props.isDark ? '#f1f1f1' : '#181818')};
`
export const SidebarListItemName = styled.h1`
  font-size: 20px;
  font-weight: ${props => (props.fontWeight ? '700' : '400')};
  margin-left: 10px;
`
export const SideBarBottomCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 30px;
`
export const BottomHeading = styled.p`
  font-size: 25px;
  color: ${props => (props.isDark ? 'white' : '#475569')};
  font-weight: 600;
`
export const SocialMediaIconsContainer = styled.div`
  dsplay: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const SocialMediaIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 8px;
`
export const BottomContainerMsg = styled.p`
  font-size: 15px;
  padding-right: 15px;
  color: ${props => (props.isDark ? 'white' : '#475569')};
`
