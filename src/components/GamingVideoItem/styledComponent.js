import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkElement = styled(Link)`
  text-decoration: none;
`
export const ListElemenet = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 350px;
  width: 200px;
  margin: 20px;
  list-style-type: none;
  @media screen and (max-width: 767px) {
    width: 100px;
    height: 310px;
    margin: 10px;
    margin-bottom: 20px;
    align-items: center;
  }
`

export const GameingVideoImg = styled.img`
  height: 70%;
  width: 100%;
`
export const GamingVideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 0px;
  height: 30%;
`
export const GameTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`
export const Gamep = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #616e7c;
  display: flex;
  align-items: center;
  margin-top: 0;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
