export const initialState = {
  multis: [],
  subs: [],
  subs_temp: [],
  token: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "RECEIVED_REDDIT_AUTH_CODE_SUCCESS": 
      return {
        ...state,
        token: action.payload.data.access_token
      }
    case "GET_MULTIS_SUCCESS":
      return {
        ...state,
        multis: action.payload.data
      }
    
    case "GET_SUBS_SUCCESS":
      return {
        ...state,
        subs_temp: [
          ...state.subs_temp,
          ...action.payload.data.data.children
        ]
      }
    
    // Note: this is hacky...
    case "GOT_ALL_SUBS":
      return {
        ...state,
        subs: state.subs_temp,
        subs_temp: []
      }

    case "GET_MULTIS_FAIL":
      if (action.error.response.data.message === "Unauthorized") {
        return {
          ...state,
          token: null
        }
      } else {
        console.log('funky error')
        return state
      }

    // Note: should LOGOUT reset app state? or reset token only?
    case "LOGOUT":
      return initialState

    default:
      return state
  }
}

export default reducer
