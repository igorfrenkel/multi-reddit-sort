import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const MultiRedditView = (props) => {
  const { multi, subs } = props
  console.log(props)
  
  return (
    <div>
      <Link to="/">Back</Link>
      
      <h1>Multi view</h1>
      <hr/>
      <h3>Subs:</h3>
      <ul>
        { subs.map((sub, i) => {
          return(
            <li key={i}>
              <input type="checkbox" checked={multi.members.indexOf(sub.id) >= 0} onChange={()=>props.handleChangeMembership(multi.id, sub.id)} />
              {sub.id}
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default MultiRedditView;
