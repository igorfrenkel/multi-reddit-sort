import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { createMulti, getMultis } from '../actions'

class MultiForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display_name: "",
      description_md: "",
      subreddits: [ ]
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  toggleSubreddit = (e) => {
    this.setState({
      subreddits: this.state.subreddits.some(el => el.name === e.target.name)
        ? this.state.subreddits.filter(el => el.name !== e.target.name)
        : this.state.subreddits.concat({ name: e.target.name })
    }) 
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { username } = this.props
    // todo: validate before submitting
    this.props.createMulti(this.state, `user/${username}/m/${this.state.display_name}`)
      .then(()=>{
        this.props.getMultis()
        this.props.history.push('/')
      })
      .catch((response)=>console.log(response))
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                value={this.state.display_name}
                onChange={this.handleChange}
                name="display_name"
              />
            </label>
          </div>
          <div>
            <label>
              Description:
              <input
                type="text"
                value={this.state.description_md}
                onChange={this.handleChange}
                name="description_md"
              />
            </label>
          </div>
          <div>
            Subreddits:
            {
              this.props.subs.map(sub=>{
                return (
                  <div key={sub}>
                    <label>
                      <input
                        type="checkbox"
                        name={sub}
                        checked={this.state.subreddits.some(el => el.name === sub)}
                        onChange={this.toggleSubreddit}
                      />
                      {sub}
                    </label>
                  </div>
                )
              })
            }
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default connect(
  state => ({
    subs: state.subs.map(sub=>sub.data.display_name),
    username: state.username 
  }),
  { createMulti, getMultis }
)(MultiForm)