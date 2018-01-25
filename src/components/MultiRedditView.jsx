import React from 'react'
import { Link } from 'react-router-dom'

const MultiRedditView = (props) => {
  const { multi, subs, handleChangeMembership } = props
  
  return (
    <div>
      <Link to="/">Back</Link>
      
      <h1>{multi.id}</h1>
      <hr/>
      <h3>Subs:</h3>
      <ul>
        { subs.map(sub => {
          return(
            <li key={sub.id}>
              <input
                type="checkbox"
                checked={multi.members.indexOf(sub.id) >= 0}
                onChange={()=>handleChangeMembership(multi.id, sub.id)} />
              {sub.id}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MultiRedditView
