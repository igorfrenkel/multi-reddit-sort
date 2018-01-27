import { connect } from 'react-redux'
import { removeMulti } from '../actions'
import MultiRedditList from '../components/MultiRedditList'
  
export default connect(
  state => ({
    multis: state.multis
  }),
  {
    removeMulti
  }
)(MultiRedditList)
