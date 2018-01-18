import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MultiRedditList from './components/MultiRedditList';
import MultiRedditView from './components/MultiRedditView';

const newSub = (id, opts={}) => {
  return {
    id: id,
    ...opts
  }
}

const initialState = {
  multis: [
    { 
      name: "security",
      members: [ "netsec", "security", "lockpicking" ]
    },
    { 
      name: "fun",
      members: [ "gifs", "videos", "cats" ]
    }
  ],
  subs: [
    newSub("gifs"), newSub("netsec"), newSub("security"), newSub("lockpicking"), newSub("videos"), newSub("cats")
  ]
}

const MultiRedditViewHoc = (props) => {
  const multi = initialState.multis.filter(multi => multi.name === props.match.params.multi)

  if (multi.length === 0) console.log('invalid multi')

  return(
    <MultiRedditView
      multi={multi[0]}
      subs={initialState.subs} />
  )
}

const MultiRedditListHoc = (props) => (
  <MultiRedditList {...props} multis={initialState.multis} />
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }
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
            <li>unchecking/checking changes state</li>
            <li>add state to redux</li>
            <li>link redux changes to reddit</li>
            <li>sorted reddit list in MultiRedditView</li>
            <li>style it</li>
          </ul>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
