import styled from 'styled-components'

export const NotFoundCon = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#ebebeb')};
  width: 82vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  margin-left: 18vw;
`
export const NotFoundBg = styled.div`
  width: 100%;
  display: flex;
`
export const Image = styled.img`
  height: 400px;
  width: 400px;
`
export const NotFoundHead = styled.h1`
  font-size: 25px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const NotFoundP = styled.p`
  font-size: 15px;
  margin-top: 0px;
  text-align: center;
  color: grey;
`
