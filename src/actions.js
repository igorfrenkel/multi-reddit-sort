const getMultis = () => ({
  type: "GET_MULTIS",
  payload: {
    request: {
      url: "/api/multi/mine"
    }
  }
})

// not implemented
const renameMulti = (display_name, from, to) => ({
  type: "RENAME_MULTI",
  payload: {
    request: {
      method: "post",
      url: "/api/multi/rename",
      params: { display_name, from, to }
    }
  }
})

const deleteMulti = (multipath) => ({
  type: "DELETE_MULTI",
  payload: {
    request: {
      method: "delete",
      url: `/api/multi/${multipath}`
    }
  }
})

const createMulti = (model, multipath) => ({
  type: "CREATE_MULTI",
  payload: {
    request: {
      method: 'post',
      url: `/api/multi/${multipath}`,
      params: { model }
    }
  }
})

// not implemented
const updateMulti = (model, multipath) => ({
  type: "UPDATE_MULTI",
  payload: {
    request: {
      method: 'put',
      url: `/api/multi/${multipath}`,
      params: { model }
    }
  }
})

const removeSubredditFromMulti = (multipath, srname) => ({
  type: "REMOVE_SUB_FROM_MULTI",
  payload: {
    request: {
      method: 'delete',
      url: `/api/multi/${multipath}/r/${srname}`
    }
  }
})

const addSubredditToMulti = (multipath, srname) => ({
  type: "ADD_SUB_TO_MULTI",
  payload: {
    request: {
      method: 'put',
      url: `/api/multi/${multipath}/r/${srname}`,
      params: { model: { name: srname } }
    }
  }
})

export const addMulti = (model) => {
  return dispatch => {
    dispatch(
      createMulti(model, `user/vinogvla/m/${model.display_name}`)
    )
  }
}

export const removeMulti = (multi) => {
  return dispatch => {
    dispatch(deleteMulti(multi.data.path.slice(1,-1)))
  }
}

export const changeMultiMembership = (multi, sub, selected) => {
  return dispatch => {
    selected ?
      dispatch(removeSubredditFromMulti(
          multi.data.path.slice(1,-1),
          sub.data.display_name
        )
      )
    :
      dispatch(addSubredditToMulti(
        multi.data.path.slice(1,-1),
        sub.data.display_name
      )
    )       
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
      if (res.payload && res.payload.data.data.after) {
        dispatch(getAllSubs(res.payload.data.data.after))
      } else if (res.payload && !res.payload.data.after) {
        dispatch({ type: "GOT_ALL_SUBS" })
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
    .then(()=>dispatch(getAllSubs()))
  }
}