import React from  'react'
import { Card, CardText, FlatButton } from 'material-ui'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const AuthRedditLogin = () => {
  const redirect = 'https://www.reddit.com/api/v1/authorize?client_id=15BdIU53jfyFcw&response_type=code&state=124&redirect_uri=http://localhost:3002/auth/reddit/confirm&duration=permanent&scope=identity,mysubreddits,read,subscribe'
  window.location = redirect 
  return(
    <CardText>
        <p>You are being redirected to reddit, if this doesn't happen automatically, click <a href={redirect}>this</a> link</p>
    </CardText>
  )
}

const LoginForm = () => (
  <CardText>
    <h1>Welcome to MRS</h1>
    <p>Please log in</p>
    <Link to='/auth/reddit/login'>Login</Link>
  </CardText>
)
const UnauthenticatedApp = () => {
  return (
    <BrowserRouter>
      <Card style={{textAlign: 'center'}}>
        <Route exact path="/" component={LoginForm} />
        <Route path="/auth/reddit/login" component={AuthRedditLogin} />
      </Card>
    </BrowserRouter>
    )
  }
export default UnauthenticatedApp  