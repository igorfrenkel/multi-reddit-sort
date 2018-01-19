import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
  if (!props.token) {
    return(<Link to="/auth/reddit/login">auth</Link>)
  }
  else {
    return(<div>You are authenticated</div>)
  }
}


const mapStateToProps = (state) => (state)

export default connect(mapStateToProps, null)(Navigation)