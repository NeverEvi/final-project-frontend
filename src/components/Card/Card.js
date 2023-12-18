import React from 'react';
import './Card.css';

function Card ({item}) {
  return (
    <div className='card' background-color={item.color}>
      <p className='card-title'>{item.name}</p>
      <img src={item.sprite} alt={item.name} className='card-image'></img>
      <div className='card-types'>
        <p className='card-type'>{item.type1}</p>
        <p className='card-type'>{item.type2}</p>
      </div>
    </div>
  )
}

export default Card; 