import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDark ? 'black' : '#ffffff')};
  @media screen and (max-width: 767px) {
    padding: 30px;
  }
`
export const LoginContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  border: none;
  background-color: ${props => (props.isDark ? '#272727' : null)};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media screen and (max-width: 767px) {
    padding: 30px;
  }
`
export const LoginLogo = styled.img`
  align-self: center;
  height: 50px;
  width: 60%;
  margin-bottom: 50px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const ShowPasswordContainer = styled.div`
  diplay: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0px;
`
export const LabelElement = styled.label`
  font-size: 13px;
  margin-bottom: 5px;
  color: ${props => (props.isDark ? '#ffffff' : '#64748b')};
`
export const ShowPasswordLabel = styled.label`
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-size: 15px;
`

export const InputEplement = styled.input`
  height: 35px;
  width: 300px;
  outline: none;
  border-radius: 5px
  border: 1px solid #64748b;
  padding: 5px;
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    width: 250px;
  }
`
export const ShowPasswordCheckBox = styled.input`
  margin-right: 5px;
  transform: scale(1.1);
`
export const SubmitButton = styled.button`
  cursor: pointer;
  border: none;
  width: 300px;
  border-radius: 10px;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 18px;
  height: 40px;
  margin-top: 30px;
  @media screen and (max-width: 767px) {
    width: 250px;
  }
`
export const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 3px;
`
