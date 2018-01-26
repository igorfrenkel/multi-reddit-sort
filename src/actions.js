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

export const getMultis = () => {
  return {
    type: "GET_MULTIS",
    payload: {
      request: {
        url: "/api/multi/mine"
      }
    }
  }
}

export const getSubs = () => {
  return {
    type: "GET_SUBS",
    payload: {
      request: {
        url: "/subreddits/mine"
      }
    }
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
    dispatch(getSubs())
  }
}

