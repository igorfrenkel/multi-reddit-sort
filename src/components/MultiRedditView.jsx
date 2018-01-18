import React, { Component } from 'react';

const MultiRedditView = (props) => {
  const { multi, subs } = props
  console.log(props)
  
  return (
    <div>
      <a href="/">Back</a>
      <h1>Multi view</h1>
      <hr/>
      <h3>Subs:</h3>
      <ul>
        { subs.map((sub, i) => {
          return(
            <li key={i}>
              <input type="checkbox" checked={multi.members.indexOf(sub.id) >= 0} onChange={() => {}} />
              {sub.id}
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default MultiRedditView;
