import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
`
export const ManiGamingCon = styled.div`
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
export const GamingBanner = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-size: 30px;
  font-weight: 600;
  font-family: Roboto;
`

export const GamingIconCon = styled.div`
  border-radius: 50%;
  height: 70px;
  width: 70px;
  background-color: ${props => (props.isDark ? '#181818' : '#d7dfe9')};
  margin-right: 14px;
  padding: 14px;
  margin-left: 30px;
`
export const GamingUl = styled.ul`
  width: 82vw;
  list-style: none;
  padding: 0px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 767px) {
    width: 100vw;
    margin: 0px;
  }
`
