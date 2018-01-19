import React from 'react'
import {connect} from 'react-redux'
import MultiRedditView from '../components/MultiRedditView'

const MultiRedditViewHoc = (props) => {
    console.log(props)
    const multi = props.multis.filter(multi => multi.name === props.match.params.multi)
  
    if (multi.length === 0) console.log('invalid multi')
  
    return(
      <MultiRedditView
        multi={multi[0]}
        subs={props.subs} />
    )
  }

const mapStateToProps = (state) => (state)


export default connect(mapStateToProps)(MultiRedditViewHoc)