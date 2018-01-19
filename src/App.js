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
            <li>add state to redux</li>
            <li>unchecking/checking changes state</li>
            <li>link redux changes to reddit</li>
            <li>sorted reddit list in MultiRedditView</li>
            <li>style it</li>
          </ul>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
