import React from  'react'
import { Card, CardText, Paper, FlatButton } from 'material-ui'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import AuthRedditConfirm from '../containers/AuthRedditConfirm'

const AuthRedditLogin = () => {
  // const CLIENT_ID='15BdIU53jfyFcw'
  const CLIENT_ID='fkdbw2GMtQ3tRg' 
  const SCOPE='identity,mysubreddits,read,subscribe'
  const REDIRECT_URI='http://localhost:3002/auth/reddit/confirm'
  const redirect = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=123&redirect_uri=${REDIRECT_URI}&duration=permanent&scope=${SCOPE}`
  window.location = redirect 
  return(
    <CardText>
        <p>You are being redirected to reddit, if this doesn't happen automatically, click <a href={redirect}>this</a> link</p>
    </CardText>
  )
}

const LoginForm = () => (
  <Card style={{textAlign: 'center'}}>
    <CardText>
      <h1>Welcome to MRS</h1>
      <p>Please log in</p>
      <Link to='/auth/reddit/login'>Login</Link>
    </CardText>
  </Card>
)


const UnauthenticatedApp = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={LoginForm} />
        <Route path="/auth/reddit/login" component={AuthRedditLogin} />
        <Route path="/auth/reddit/confirm" component={AuthRedditConfirm} />
      </div>
    </BrowserRouter>
    )
  }
export default UnauthenticatedApp  
