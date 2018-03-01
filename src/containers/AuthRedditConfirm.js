import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { receivedRedditAuthCode, refresh } from '../actions'

const AuthRedditConfirm = (props) => {
    const codeTup = props.location.search.replace('?', '').split('&')
      .map(pair => pair.split('=')).find(tup => tup[0] === 'code')
    
    if (codeTup === undefined) {
      console.log('No code supplied by reddit')
      return
    }
  
    const code = codeTup[1]
    if (!props.token) {
        props.receivedRedditAuthCode(code)
    }
    if (props.token) {
        props.refresh()
        return <Redirect to="/" />
    }
    return (<div>Authenticating...</div>)
  }

const mapStateToProps = (state) => (state)

const mapDispatchToProps = dispatch => ({
    receivedRedditAuthCode: (code) => dispatch(receivedRedditAuthCode(code)),
    refresh: () => dispatch(refresh())
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedditConfirm)
