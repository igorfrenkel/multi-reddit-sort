import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MultiRedditList from './components/MultiRedditList';
import MultiRedditView from './components/MultiRedditView';

const multi1 = {
  name: "security",
  members: [ "netsec", "security", "lockpicking" ]
}

const initialState = {
  multis: [
    multi1
  ],
  subs: [
    "gifs", "netsec", "security", "lockpicking"
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
          <Route path="/" exact component={MultiRedditList} />
          <hr/>
          <h3>todo</h3>
          <ul>
            <li><strike>render a list of reddits for each multi</strike></li>
            <li>make reddits stateful as part of multi</li>
            <li>checkbox to select reddits</li>
            <li>ribbon to select multi for moving subreddits</li>
            <li>create new multi from a group of reddits</li>
            <li>style v1</li>
            <li>plug in real api</li>
          </ul>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
