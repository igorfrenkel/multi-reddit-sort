import { connect } from 'react-redux'
import MultiRedditView from '../components/MultiRedditView'
import { changeMultiMembership } from '../actions'

export default connect(
  (state, ownProps) => ({
    multi: state.multis.filter(multi => multi.data.name === ownProps.match.params.multi)[0],
    subs: state.subs
  }),
  dispatch => ({
    handleChangeMembership: (multi, sub, selected) => dispatch(changeMultiMembership(multi, sub, selected))
  })
)(MultiRedditView)