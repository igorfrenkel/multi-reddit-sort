import React from 'react'
import { connect } from 'react-redux'
import MultiRedditList from '../components/MultiRedditList'
import { getMultis } from '../actions'
  
class MultiRedditListHoc extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        console.log('meow', this.props)
        if(this.props.token){
            this.props.getMultis()
        }
    }
    render() {
        return (
            <MultiRedditList {...this.props} multis={this.props.multis} />
        )
    }
}


const mapDispatchToProps = dispatch => ({
    getMultis: () => dispatch(getMultis())
  })

export default connect(state=>(state), mapDispatchToProps)(MultiRedditListHoc)


