import {
  NotFoundCon,
  NotFoundBg,
  Image,
  NotFoundHead,
  NotFoundP,
} from './styledComponent'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const image = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundBg isDark={isDark}>
            <SideBar />
            <NotFoundCon isDark={isDark}>
              <Image src={image} alt="not found" />
              <NotFoundHead isDark={isDark}> Page Not Found</NotFoundHead>
              <NotFoundP>
                We are sorry, the page you requested could not be found.
              </NotFoundP>
            </NotFoundCon>
          </NotFoundBg>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
