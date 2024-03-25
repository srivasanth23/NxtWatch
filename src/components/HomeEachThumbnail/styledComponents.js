import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkElement = styled(Link)`
  text-decoration: none;
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 350px;
  margin: 20px;
  @media screen and (max-width: 767px) {
    width: 100vw;
    margin: 0px;
    align-self: center;
  }
`
export const Thumbnail = styled.img`
  margin-bottom: 5px;
  width: 100%;
  height: 50%;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const ThumbnailDetilsCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 50%;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const LogoImage = styled.img`
  width: 20%;
  height: 50px;
  margin-top: 20px;
  margin-right: 10px;
  @media screen and (max-width: 767px) {
    width: 15%;
    height: 40px;
  }
`
export const DetailsCon = styled.div`
  width: 80%;
`
export const Title = styled.p`
  font-size: 15px;
  padding: 5px;
  padding-bottom: 3px;
  font-weight: 500;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const ChannelName = styled.p`
  color: #616e7c;
  margin-top: 0px;
  padding-left: 5px;
  font-size: 12px;
  font-weight: 500;
`
export const MoreDetails = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0px;
  color: #616e7c;
  padding-left: 5px;
`
