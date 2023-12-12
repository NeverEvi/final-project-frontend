import React from 'react';
import './Card.css';

function Card () {
  return (
    <div className='card'>
    <p className='card-title'>CARD</p>
    <img src="" alt="pokemon" className='card-image'></img>
    <div className='card-types'>
      <p className='card-type'>Type1</p>
      <p className='card-type'>Type2</p>
    </div>
    </div>
  )
}

export default Card; 