import React from 'react';
import './Header.css';
import { Route, Link, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../../images/Ball_icon.png';
import grass from '../../images/grass.png'
import Navigation from '../Navigation/Navigation';


function Head () {
	return (
		<header className="App-header">
      <Switch>
      <Route exact path="/">
        <div className="landing-head">
          <h1 className="landing-header-title">PokéCard</h1> 
          <h2 className="landing-header-subtitle">View Pokémon details.</h2>
          <p className='landing-header-text'>Click the Pokéball to begin</p>
          <Link to="/home" className='landing-logo-container'>
            <img src={logo} className="landing-logo" alt="logo" />
            <span className='landing-logo-button'></span>
          </Link>
        <img src={grass} className='landing-logo-background' alt="grass"/>
        </div>
      </Route>

			<Route exact path="/home">
        <div className='head'>
          <h1 className="header-title">PokéCard</h1> 
          <div className='header-right'>
            <Link className="header-right-signup" to="/signup">Sign Up</Link>
          <Navigation/>
          </div>
        </div>
      </Route>

      <Route exact path="/cards">
        <div className='head'>
          <h1 className="header-title">PokéCard</h1> 
          <div className='header-right'>
            <Link className="header-right-signup" to="/signup">Sign Up</Link>
          <Navigation/>
          </div>
        </div>
      </Route>

      <Route exact path="/signup">
        <div className='head'>
          <h1 className="header-title">PokéCard</h1> 
          <div className='header-right'>
            
          <Navigation/>
          </div>
        </div>
      </Route>
      <Route path='*'>
        <div className='head'>
          <h1 className="header-title">PokéCard</h1> 
          <div className='header-right'>
            
          <Navigation/>
          </div>
        </div>
      </Route>
      </Switch>
        </header>
  )
}

export default Head; 