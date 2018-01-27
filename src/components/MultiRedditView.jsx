import React from 'react'
import { Link } from 'react-router-dom'

const MultiRedditView = (props) => {
  const { multi, subs, handleChangeMembership } = props
  if (!multi) {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>Invalid multi {props.match.params.multi}</h1>
        <hr/>
      </div>
    )
  }
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>{multi.data.name}</h1>
      <hr/>
      <h3>Subs:</h3>
      <ul>
        { subs.map(sub => {
          const checked = multi.data.subreddits.map(sr => sr.name).indexOf(sub.data.display_name) >= 0
          return(
            <li key={sub.data.display_name}>
              <input
                type="checkbox"
                checked={checked}
                onChange={()=>handleChangeMembership(multi, sub, checked)} />
              {sub.data.display_name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MultiRedditView
