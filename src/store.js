import {createStore, compose} from 'redux'
import reducer from './reducer'

const composeEnhancers = 
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // actionsBlacklist, actionsCreators, serialize..
    }) : compose


let store = createStore(reducer, composeEnhancers())

export default store

