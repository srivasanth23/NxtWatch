import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const FailureImg = styled.img`
  height: 300px;
  width: 300px;
  margin-top: 50px;
`
export const FailureHeading = styled.h1`
  font-size: 25px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const FailureMsg = styled.p`
  font-size: 15px;
  margin-top: 0px;
  text-align: center;
  color: grey;
`
export const RetryBtn = styled.button`
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
