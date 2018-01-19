import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import MultiRedditList from './components/MultiRedditList';
import MultiRedditViewHoc from './containers/MultiRedditViewHoc';

const anon = (props) => (
  <MultiRedditList {...props} multis={props.multis} />
)
const MultiRedditListHoc = connect(state=>(state))(anon)

class App extends Component {
  render() {    
    return (
      <BrowserRouter>
        <div>
          <Route path="/multi/:multi" component={MultiRedditViewHoc}></Route>
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
