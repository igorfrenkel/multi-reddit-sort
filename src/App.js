import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom';
import MultiRedditList from './components/MultiRedditList';
import MultiRedditViewHoc from './containers/MultiRedditViewHoc';

const anon = (props) => (
  <MultiRedditList {...props} multis={props.multis} />
)
const MultiRedditListHoc = connect(state=>(state))(anon)

const AuthRedditLogin = () => (
  window.location = 'https://www.reddit.com/api/v1/authorize?client_id=15BdIU53jfyFcw&response_type=code&state=123&redirect_uri=http://localhost:3002&duration=permanent&scope=mysubreddits'
)


class App extends Component {
  render() {    
    return (
      <BrowserRouter>
        <div>
          <Link to="/auth/reddit/login">auth</Link>
          <Route path="/auth/reddit/login" component={AuthRedditLogin} />
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
                <li>bake into the app reddit api key</li>
                <li>exchange code for bearer token</li>
                <li>make authed call to fetch subreddits</li>
                
                <li>pull user's list of multis</li>
                <li>send membership change to reddit</li>
              </ul>
            </li>
            <li>sorted reddit list in MultiRedditView</li>
            <li>style it</li>
          </ul>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
