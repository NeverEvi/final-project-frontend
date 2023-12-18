import React from 'react';
import './Card.css';

function Card ({item, handleSelectedCard}) {
  return (
    <div 
      className='card' 
      background-color={item.color} 
      onClick={() =>handleSelectedCard(item)}
    >
      <p className='card-title'>{item.name.toUpperCase()}</p>
      <img src={item.sprite} alt={item.name} className='card-image'></img>
      <div className='card-types'>
        <p className='card-type'>{item.type1}</p>
        {item.type2 ? <p className='card-type'>{item.type2}</p> : <p className='card-type'></p>}
      </div>
    </div>
  )
}

export default Card; 