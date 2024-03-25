import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},
  activeTab: 'Home',
  changeActiveTab: () => {},
  savedVideos: [],
  addToSavedVideos: () => {},
})

export default NxtWatchContext
