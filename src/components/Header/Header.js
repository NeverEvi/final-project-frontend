import React from 'react';
import './Header.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function Head () {
	return (
		<div className="head">
			<Route exact path="/">
        <h1 className="landing-header-title">PokéCard</h1> 
        <h2 className="landing-header-subtitle">View Pokémon details.</h2>
        <p className='landing-header-text'>Click the Pokéball to begin</p>
      </Route>
			<Route exact path="/home">
        <h1 className="header-title">PokéCard</h1> 
        <h2 className="header-subtitle">View Pokémon details.</h2>
      </Route>
    </div>
  )
}

export default Head; 