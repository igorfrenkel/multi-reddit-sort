import {createStore, applyMiddleware, compose} from 'redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import reducer from './reducer'

const composeEnhancers = 
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // actionsBlacklist, actionsCreators, serialize..
    }) : compose

const client = axios.create({
  baseURL: 'https://www.reddit.com',
  responseType: 'json'
})

const axiosMiddlewareOptions = {
  interceptors: {
    request: [
      (obj, config) => {
        if (obj.getState().token) {
          config.headers['Authorization'] = `Bearer ${obj.getState().token}`
        }
        return config
      }
    ]
  }
}

let store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      axiosMiddleware(client, axiosMiddlewareOptions)
    )
  )
)

export default store

