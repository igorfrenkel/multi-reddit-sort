import React from 'react'
import { connect } from 'react-redux'
import UnauthenticatedApp from './components/UnauthenticatedApp'
import AuthenticatedApp from './components/AuthenticatedApp'

const App = ({ token }) => {
  console.log(`token: ${token}`)
  if (!token) {
    return (<UnauthenticatedApp />)
  }
  else {
    return (<AuthenticatedApp />)
  }
}

export default connect( state => ({
  token: state.token
}))(App)
