import styled from 'styled-components'

export const HomeVideoUnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  list-style: none;
  @media screen and (max-width: 767px) {
    padding-left: 0px;
    margin: 0px;
  }
`
export const NoSearchItemCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const NoSearchImg = styled.img`
  height: 300px;
  width: 350px;
  margin-top: 50px;
`
export const NoSearchHeading = styled.h1`
  font-size: 25px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const NoSearchmsg = styled.p`
  font-size: 15px;
  margin-top: 0px;
  text-align: center;
  color: grey;
`
export const RetryButton = styled.button`
  border: none;
  border-radius: 3px;
  padding: 10px 30px;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 30px;
`
