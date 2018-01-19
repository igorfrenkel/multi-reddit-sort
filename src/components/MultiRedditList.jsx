import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const MultiRedditList = (props) => {
  const { multis } = props

  return (
    <ul>
      {multis.map((multi, i) =>
        <li key={i}><Link to={`/multi/${multi.id}`}>{multi.id}</Link></li>)}
    </ul>
  )
};

export default MultiRedditList;
