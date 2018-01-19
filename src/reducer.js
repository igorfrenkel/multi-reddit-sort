const newSub = (id, opts={}) => {
  return {
    id: id,
    ...opts
  }
}

const initialState = {
  multis: [
    { 
      name: "security",
      members: [ "netsec", "security", "lockpicking" ]
    },
    { 
      name: "fun",
      members: [ "gifs", "videos", "cats" ]
    }
  ],
  subs: [
    newSub("gifs"), newSub("netsec"), newSub("security"), newSub("lockpicking"), newSub("videos"), newSub("cats")
  ]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default reducer