import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MultiRedditViewHoc from '../containers/MultiRedditViewHoc'
import MultiRedditListHoc from '../containers/MultiRedditListHoc'
import Navigation from '../containers/Navigation'
import MultiForm from './MultiForm'

const AuthenticatedApp = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation/>
        <Route path="/multi/:multi" component={MultiRedditViewHoc} />
        <Route path="/add-multi" component={MultiForm} />
        <Route path="/" exact component={MultiRedditListHoc} />
      </div>
    </BrowserRouter>
  )
}

export default AuthenticatedApp
