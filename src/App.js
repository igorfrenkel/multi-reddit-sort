import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import MultiRedditViewHoc from './containers/MultiRedditViewHoc'
import MultiRedditListHoc from './containers/MultiRedditListHoc'
import AuthRedditConfirm from './containers/AuthRedditConfirm'
import MultiForm from './components/MultiForm'
import Navigation from './containers/Navigation'
import UnauthenticatedApp from './components/UnauthenticatedApp'

const AuthRedditLogin = () => (
  window.location = 'https://www.reddit.com/api/v1/authorize?client_id=15BdIU53jfyFcw&response_type=code&state=124&redirect_uri=http://localhost:3002/auth/reddit/confirm&duration=permanent&scope=identity,mysubreddits,read,subscribe'
)

const App = ({ token }) => {
  if (!token) {
    return (<UnauthenticatedApp />)
  }
  else {
    return (<AuthenticatedApp />)
  }
}


const AuthenticatedApp = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation/>
        <Route path="/auth/reddit/login" component={AuthRedditLogin} />
        <Route path="/auth/reddit/confirm" component={AuthRedditConfirm} />
        <Route path="/multi/:multi" component={MultiRedditViewHoc} />
        <Route path="/add-multi" component={MultiForm} />
        <Route path="/" exact component={MultiRedditListHoc} />
      </div>
    </BrowserRouter>
  )
}


export default connect( state => ({
  token: state.token
}))(App)