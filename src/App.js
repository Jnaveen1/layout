import {Component} from 'react'
import ConfigurationController from './components/ConfigurationController'
import ConfigurationContext from './context/ConfigurationContext'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowRightNavbar = () => {
    this.setState(state => ({showRightNavbar: !state.showRightNavbar}))
  }

  onToggleShowContent = () => {
    console.log('hi')
    this.setState(state => ({showContent: !state.showContent}))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(state => ({showLeftNavbar: !state.showLeftNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    console.log(showContent)
    console.log(showLeftNavbar)
    console.log(showRightNavbar)
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
        }}
      >
        <div className="main-container">
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
