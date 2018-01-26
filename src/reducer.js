export const initialState = {
  multis: [],
  subs: [],
  token: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "CHANGE_MULTI_MEMBERSHIP": {
      console.log(action)
      return state
    }

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
        subs: action.payload.data.data.children
      }
    case "LOGOUT":
      return initialState

    default:
      return state
  }
}

export default reducer
