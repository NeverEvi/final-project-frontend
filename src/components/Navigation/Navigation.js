import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Navigation () {
  return (
    <div className="Nav">
      <NavLink
          className="Nav-link"
          to="/home"
          rel="noopener noreferrer"
        >
          Home
        </NavLink>
      <NavLink
        className="Nav-link"
        to="/cards"
        rel="noopener noreferrer"
      >
        Cards
      </NavLink>
      <NavLink
        className="Nav-link"
        to="/home"
        rel="noopener noreferrer"
      >
        Search
      </NavLink>
    </div>
  )
}

export default Navigation; 