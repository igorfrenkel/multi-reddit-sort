import { connect } from 'react-redux'
import MultiRedditList from '../components/MultiRedditList'
  
export default connect(
  state => ({
    multis: state.multis
  })
)(MultiRedditList)
