import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingVideoLink = styled(Link)`
  text-decoration: none;
`

export const TrendingVideoListItem = styled.li`
  display: flex;
  align-items: flex-start;
  height: 200px;
  width: 100%;
  margin: 20px;
  background-color: transparent;
  list-style-type: none;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 300px;
    width: 90%;
    margin: 20px;
    align-self: center;
  }
`

export const TrendingVideoImg = styled.img`
  height: 100%;
  width: 350px;
  margin-right: 10px;
  @media screen and (max-width: 567px) {
    width: 100%;
    height: 60%;
  }
`

export const TrendingVideoItemCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: transparent;
  margin: 0;
  width: 40%;
  height: 100%;
  @media screen and (max-width: 567px) {
    width: 100%;
    height: 35%;
  }
`

export const TrendingVideoChannelLogo = styled.img`
  display: none;
  @media screen and(max-width:567px) {
    display: block;
    width: 30px;
    height: 30px;
    margin: 20px 8px 0 8px;
  }
`

export const TrendingVideoItemDetailsCon = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
`

export const TrendingVideoTitle = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-size: 20px;
  font-weight: 500;
  @media screen and (max-width: 567px) {
    font-size: 16px;
  }
`

export const Dot = styled.span`
  display: none;
  @media screen and (max-width: 567px) {
    display: block;
  }
`

export const TrendingVideoItemDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 567px) {
    align-items: center;
    flex-direction: row;
  }
`

export const TrendingVideoItemDetail = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #616e7c;
  display: flex;
  align-items: center;
  margin-top: 0;
`
