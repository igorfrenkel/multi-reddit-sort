import React from 'react'
import { Link } from 'react-router-dom'

const MultiRedditList = (props) => {
  const { multis } = props
  return (
    <ul>
      { multis.map(multi =>
        <li key={multi.data.name}>
          <Link to={`/multi/${multi.data.name}`}>
            {multi.data.name}
          </Link>
          {' '}
          <button onClick={()=>props.removeMulti(multi)}>-</button>
        </li>
      )}
      <br/>
      <Link to={'/add-multi'}>add</Link>
    </ul>
  )
}

export default MultiRedditList
