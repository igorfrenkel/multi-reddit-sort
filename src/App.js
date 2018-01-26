import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import MultiRedditViewHoc from './containers/MultiRedditViewHoc'
import MultiRedditListHoc from './containers/MultiRedditListHoc'
import AuthRedditConfirm from './containers/AuthRedditConfirm'
import Navigation from './containers/Navigation'
import { getMultis, getSubs } from './actions'

const AuthRedditLogin = () => (
  window.location = 'https://www.reddit.com/api/v1/authorize?client_id=15BdIU53jfyFcw&response_type=code&state=124&redirect_uri=http://localhost:3002/auth/reddit/confirm&duration=permanent&scope=mysubreddits,read,subscribe'
)

class App extends Component {
  componentWillMount() {
      if(this.props.token){
          this.props.getMultis()
          this.props.getSubs()
      } else {
        console.error('no token? cant pull, please auth')
      }
  }
  render() {    
    return (
      <BrowserRouter>
        <div>
          <Navigation/>
          <Route path="/auth/reddit/login" component={AuthRedditLogin} />
          <Route path="/auth/reddit/confirm" component={AuthRedditConfirm} />
          <Route path="/multi/:multi" component={MultiRedditViewHoc} />
          <Route path="/" exact component={MultiRedditListHoc} />
          <hr/>
          <h3>todo</h3>
          <ul>
            <li><strike>render a list of reddits for each multi</strike></li>
            <li><strike>add another multi with its own state</strike></li>
            <li><strike>add state to redux</strike></li>
            <li><strike>unchecking/checking changes state</strike></li>
            <li>reddit functionality
              <ul>
                <li><strike>bake into the app reddit api key</strike></li>
                <li><strike>exchange code for bearer token</strike></li>
                <li><strike>make authed call to fetch multis</strike></li>
                <li><strike>wire multis returned by api to state</strike></li>
                <li><strike>make authed call to fetch subreddits</strike></li>
                <li>add refresh link, logout</li>
                <li>paginate multi and sub calls</li>
                <li>pull user's list of multis</li>
                <li>send membership change to reddit</li>
              </ul>
            </li>
            <li>sorted reddit list in MultiRedditView</li>
            <li>style it</li>
          </ul>
        </div>
      </BrowserRouter>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getMultis: () => dispatch(getMultis()),
  getSubs: () => dispatch(getSubs())
})

export default connect(state=>(state), mapDispatchToProps)(App)
