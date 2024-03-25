import styled from 'styled-components'

export const VideoContainer = styled.div`
  display: flex;
`
export const VideoItemContainer = styled.div`
  width: 82vw;
  height: 100%;
  min-height: 90vh;
  margin-top: 10vh;
  margin-left: 18vw;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ebebeb')};
  @media screen and (max-width: 767px) {
    width: 100vw;
    margin-left: 0;
  }
`

export const VideoCard = styled.div`
  width: 100%;
  padding: 20px 30px;
  @media screen and (max-width: 767px) {
    padding: 20px 10px;
  }
`

export const VideoTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
  color: ${props => (props.isDark ? 'white' : 'black')};
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`

export const VideoDetailsCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const VideoCountDetail = styled.p`
  color: #616e7c;
  font-weight: 500;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
export const VideoButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`
export const VideoBtn = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.color};
`
export const VideoDetailsCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 0px;
`
export const VideoLogo = styled.img`
  width: 5%;
  height: 50px;
  margin-top: 30px;
  @media screen and (max-width: 767px) {
    width: 15%;
    height: 50px;
  }
`
export const VideoDetailsConBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  padding: 15px;
`
export const VideoChannelTitle = styled.p`
  font-size: 25px;
  padding: 5px;
  font-weight: 500;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const VideoDescription = styled.p`
  font-size: 18px;
  padding: 5px;
  width: 100%
  margin-top: 0px;
  color: ${props => (props.isDark ? 'white' : 'black')};
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
