import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout, refresh } from '../actions'

const Navigation = (props) => {
  if (!props.token) {
    return(<Link to="/auth/reddit/login">auth</Link>)
  }
  else {
    return(<div>
      <h2>Welcome [user]!</h2>
      <button onClick={()=>props.refresh()}>Refresh</button>
      <button onClick={()=>props.logout()}>Logout</button>
    </div>)
  }
}

const mapStateToProps = (state) => (state)

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  refresh: () => dispatch(refresh())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)