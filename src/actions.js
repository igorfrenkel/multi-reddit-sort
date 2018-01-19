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