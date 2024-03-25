import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
`
export const MainHomeContainer = styled.div`
  width: 82vw;
  height: 100%;
  min-height: 90vh;
  margin-top: 10vh;
  margin-left: 18vw;
  background-color: ${props => (props.isDark ? '#181818' : '#ebebeb')};
  @media screen and (max-width: 767px) {
    width: 100vw;
    margin-left: 0;
  }
  overflow: hidden;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 82vw;
  height: 240px;
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  display: ${props => props.display};
  @media screen and (max-width: 767px) {
    width: 100vw;
    padding: 20px;
    background-size: cover;
    height: 150px;
  }
`
export const NxtWatchLogo = styled.img`
  width: 200px;
  @media screen and (max-width: 767px) {
    width: 90px;
  }
`
export const BannerPara = styled.p`
  font-weight: 400;
  font-size: 20px;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`
export const BannerLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const BannerButton = styled.button`
  background-color: transparent;
  border: 1px solid black;
  padding: 8px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
    padding: 6px;
  }
`
export const BannerRightContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 30px;
  background-color: transparent;
  border: none;
`
export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 500px;
  height: 35px;
  margin: 20px 70px;
  border: 3px solid ${props => (props.isDark ? '#475569' : '#cbd5e1')};
  background-color: ${props => (props.isDark ? 'transparent' : '#cbd5e1')}
  color: ${props => (props.isDark ? '#231f20' : 'black')};
  @media screen and (max-width: 767px) {
    width: 90%;
    margin: 20px;
  }
`
export const SearchElement = styled.input`
  outline: none;
  height: 100%;
  width: 90%;
  padding: 3px 7px;
  border: none;
`
export const SearchIconButton = styled.button`
  border: 0px none;
  background-color: ${props => (props.isDark ? '#475569' : '#cbd5e1')};
  height: 35px;
  width: 10%;
  @media screen and (max-width: 767px) {
    width: 12%;
  }
`
