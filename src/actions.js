export const changeMultiMembership = (multiId, subId) => {
  return {
    type: "CHANGE_MULTI_MEMBERSHIP",
    multiId,
    subId
  }
}

export const receivedRedditAuthCode = (code) => {
  return {
    type: "RECEIVED_REDDIT_AUTH_CODE",
    payload: {
      request: {
        url: 'http://localhost:3003/auth/reddit/token',
        method: 'POST',
        data: {
          code: code
        }
      }
    }
  }
}

// Note: no pagination parameters available via api
// assumption is that all multis get returned
const getMultis = () => {
  return {
    type: "GET_MULTIS",
    payload: {
      request: {
        url: "/api/multi/mine"
      }
    }
  }
}

const SUBS_FETCH_LIMIT_MAX = 100

const getSubs = (after) => {
  return {
    type: "GET_SUBS",
    payload: {
      request: {
        url: "/subreddits/mine",
        params: {
          limit: SUBS_FETCH_LIMIT_MAX,
          after
        }
      }
    }
  }
}

const getAllSubs = (after=null) => {
  return dispatch => {
    dispatch(getSubs(after))
    .then(res => {
      if (res.payload.data.data.after) {
        dispatch(getSubs(res.payload.data.data.after))
      }
    })
  }
}

export const logout = () => {
  return {
    type: "LOGOUT"
  }
}

export const refresh = () => {
  return dispatch => {
    dispatch(getMultis())
    dispatch(getAllSubs())
  }
}

