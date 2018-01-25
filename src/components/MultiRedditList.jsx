import React from 'react'
import { Link } from 'react-router-dom'

const MultiRedditList = (props) => {
  const { multis } = props

  return (
    <ul>
      { multis.map(multi =>
        <li key={multi.id}>
          <Link to={`/multi/${multi.id}`}>
            {multi.id}
          </Link>
        </li>
      )}
    </ul>
  )
}

export default MultiRedditList
