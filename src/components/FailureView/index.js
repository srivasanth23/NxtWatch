import NxtWatchContext from '../../context/NxtWatchContext'
import {
  FailureContainer,
  FailureHeading,
  FailureImg,
  FailureMsg,
  RetryBtn,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const failureimg = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer>
            <FailureImg src={failureimg} alt="failure view" />
            <FailureHeading isDark={isDark}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureMsg>
              We are having some trouble to complete your request.
              <br /> Please try again.
            </FailureMsg>
            <RetryBtn type="button" onClick={onClickRetry}>
              Retry
            </RetryBtn>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
