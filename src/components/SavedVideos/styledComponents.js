import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
`
export const MainTrendingContainer = styled.div`
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
  overflow: hidden;
`

export const NoSavedVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const NoSavedVideosImg = styled.img`
  margin-top: 50px;
  height: 300px;
  width: 300px;
`
export const NoSavedVideosHeading = styled.h1`
  font-size: 38px;
  margin-bottom: 16px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  @media screen and (max-width: 767px) {
    font-size: 28px;
  }
`

export const NoSavedVideosDescription = styled.p`
  color: ${props => (props.isDark ? '#e2e8f0' : '#475569')};
  font-size: 22px;
`

export const SavedVideosUl = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0px;
`
export const TabHeaderCon = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  background: ${props => (props.isDark ? '#000000' : '#f1f5f9')};
  @media screen and (max-width: 567px) {
    height: 100px;
  }
`
export const SavedText = styled.p`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => (props.isDark ? 'white' : 'black')};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const SavedVideosIconCon = styled.div`
  border-radius: 50%;
  height: 70px;
  width: 70px;
  background-color: ${props => (props.isDark ? '#181818' : '#d7dfe9')};
  margin-right: 14px;
  padding: 14px;
  margin-left: 30px;
`
