import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const MultiRedditList = (props) => {
  console.log(props)
  const multis = ['security'];

  return (
    <ul>
      {multis.map(multi =>
        <li><Link to={`/multi/${multi}`}>{multi}</Link></li>)}
    </ul>
  )
};

export default MultiRedditList;
