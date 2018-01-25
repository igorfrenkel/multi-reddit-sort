import React from 'react'
import { connect } from 'react-redux'
import MultiRedditView from '../components/MultiRedditView'
import { changeMultiMembership } from '../actions'

const MultiRedditViewHoc = (props) => {
    const multi = props.multis.filter(multi => multi.id === props.match.params.multi)
  
    if (multi.length === 0) console.log('invalid multi')
  
    return(
      <MultiRedditView
        multi={multi[0]}
        subs={props.subs} 
        handleChangeMembership={props.changeMultiMembership}
      />
    )
  }

const mapStateToProps = (state) => (state)

const mapDispatchToProps = dispatch => ({
  changeMultiMembership: (multiId, subId) => dispatch(changeMultiMembership(multiId, subId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MultiRedditViewHoc)
