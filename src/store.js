import {createStore, applyMiddleware, compose} from 'redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import reducer, { initialState } from './reducer'

const composeEnhancers = 
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // actionsBlacklist, actionsCreators, serialize..
    }) : compose

const client = axios.create({
  baseURL: 'https://oauth.reddit.com',
  responseType: 'json'
})

const axiosMiddlewareOptions = {
  interceptors: {
    request: [
      (obj, config) => {
        if (obj.getState().token) {
          config.headers['Authorization'] = `bearer ${obj.getState().token}`
          config.headers['User-Agent'] = 'web:com.example.app:v0.0.1'
        }
        return config
      }
    ]
  }
}

const persistedState = localStorage.getItem('multi-reddit-sort')
  ? JSON.parse(localStorage.getItem('multi-reddit-sort'))
  : initialState


let store = createStore(
  reducer,
  persistedState,
  composeEnhancers(
    applyMiddleware(
      axiosMiddleware(client, axiosMiddlewareOptions)
    )
  )
)

store.subscribe(() => {
  localStorage.setItem(
    'multi-reddit-sort',
    JSON.stringify(store.getState())
  )
})

export default store

