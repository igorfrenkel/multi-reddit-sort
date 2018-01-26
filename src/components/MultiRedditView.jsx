import React from 'react'
import { Link } from 'react-router-dom'

const MultiRedditView = (props) => {
  const { multi, subs, handleChangeMembership } = props
  
  return (
    <div>
      <Link to="/">Back</Link>
      
      <h1>{multi.data.name}</h1>
      <hr/>
      <h3>Subs:</h3>
      <ul>
        { subs.map(sub => {
          return(
            <li key={sub.data.display_name}>
              <input
                type="checkbox"
                checked={multi.data.subreddits.map(sr => sr.name).indexOf(sub.data.display_name) >= 0}
                onChange={()=>handleChangeMembership(multi.data.name, sub.data.display_name)} />
              {sub.data.display_name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MultiRedditView
