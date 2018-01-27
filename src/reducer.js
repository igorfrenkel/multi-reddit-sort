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
        multis: action.payload.data.sort((a, b) => a.data.name < b.data.name ? -1 : 1)
      }
  
    case "DELETE_MULTI_SUCCESS": { 
      return {
        ...state,
        multis: state.multis.filter(multi => 
          multi.data.name !== action.meta.previousAction.payload.request.url.split('/').pop()
        )
      }
    } 

    case "ADD_SUB_TO_MULTI_SUCCESS":
      return {
        ...state,
        multis: state.multis.map(multi => {
          if (action.meta.previousAction.payload.request.url.includes(multi.data.path)) {
            return {
              ...multi,
              data: {
                ...multi.data,
                subreddits: multi.data.subreddits.concat(
                  action.meta.previousAction.payload.request.params.model
                )
              }
            }
          }
          return multi
        })
      }

    case "REMOVE_SUB_FROM_MULTI_SUCCESS":
      return {
        ...state,
        multis: state.multis.map(multi => {
          if (action.meta.previousAction.payload.request.url.includes(multi.data.path)) {
            return {
              ...multi,
              data: {
                ...multi.data,
                subreddits: multi.data.subreddits.filter(sub =>
                  sub.name !== action.meta.previousAction.payload.request.url.split('/').pop()
                )
              }
            }
          }
          return multi
        })
      }

    // Note: this is hacky...
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
