import {Component} from 'react'

import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginBgContainer,
  LoginContainer,
  LoginLogo,
  FormContainer,
  LabelElement,
  InputEplement,
  ShowPasswordContainer,
  ShowPasswordCheckBox,
  ShowPasswordLabel,
  SubmitButton,
  ErrorMsg,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showSubmitErorr: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  submitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  submitFailure = errorMsg => {
    this.setState({
      errorMsg,
      showSubmitErorr: true,
    })
  }

  onSubmitCredentials = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://login-backend-8yn5.onrender.com'
    const userDetails = {username, password}

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.submitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showPassword} = this.state
    const {showSubmitErorr, errorMsg} = this.state
    const hiddenPassword = showPassword ? 'text' : 'password'

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const logo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginBgContainer isDark>
              <LoginContainer isDark>
                <LoginLogo src={logo} alt="website logo" />
                <FormContainer onSubmit={this.onSubmitCredentials}>
                  <LabelElement htmlFor="username" isDark>
                    USERNAME
                  </LabelElement>
                  <InputEplement
                    id="username"
                    placeholder="Enter username"
                    onChange={this.onChangeUsername}
                    value={username}
                    type="text"
                  />
                  <LabelElement htmlFor="password" isDark>
                    PASSWORD
                  </LabelElement>
                  <InputEplement
                    id="password"
                    placeholder="Enter password"
                    onChange={this.onChangePassword}
                    value={password}
                    type={hiddenPassword}
                  />
                  <ShowPasswordContainer>
                    <ShowPasswordCheckBox
                      type="checkbox"
                      value={showPassword}
                      id="check-box"
                      onClick={this.onToggleShowPassword}
                    />
                    <ShowPasswordLabel htmlFor="check-box" isDark>
                      Show Password
                    </ShowPasswordLabel>
                  </ShowPasswordContainer>
                  <SubmitButton type="Submit"> Login </SubmitButton>
                  {showSubmitErorr && <ErrorMsg> *{errorMsg}</ErrorMsg>}
                </FormContainer>
              </LoginContainer>
            </LoginBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
