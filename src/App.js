import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItem from './components/VideoItem'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDark: false,
    activeTab: 'Home',
    savedVideos: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  changeActiveTab = tab => {
    this.setState({activeTab: tab})
  }

  addToSavedVideos = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(each => each.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  render() {
    const {isDark, activeTab, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          activeTab,
          savedVideos,
          toggleTheme: this.toggleTheme,
          changeActiveTab: this.changeActiveTab,
          addToSavedVideos: this.addToSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoItem} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
