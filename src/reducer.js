const newSub = (id, opts={}) => {
  return {
    id: id,
    ...opts
  }
}

const initialState = {
  multis: [
    { 
      id: "security",
      members: [ "netsec", "security", "lockpicking" ]
    },
    { 
      id: "fun",
      members: [ "gifs", "videos", "cats" ]
    }
  ],
  subs: [
    newSub("gifs"), newSub("netsec"), newSub("security"), newSub("lockpicking"), newSub("videos"), newSub("cats")
  ]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "CHANGE_MULTI_MEMBERSHIP": {
      const multi = Object.assign({}, state.multis.find(m => m.id === action.multiId))
      
      if (multi === undefined) return state

      if (multi.members.indexOf(action.subId) >= 0) {
        multi.members = multi.members.filter(id => id !== action.subId)
      } else {
        multi.members = multi.members.concat(action.subId)
      }

      const temp = state.multis.filter(m => m.id !== multi.id).concat(multi)
      return { ...state, multis: temp }
    }
    default:
      return state
  }
}

export default reducer