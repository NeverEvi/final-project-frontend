import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Navigation () {
  return (
    <div className="Nav">
      <Link
          className="Nav-link"
          to="/home"
          
          rel="noopener noreferrer"
        >
          Home
        </Link>
    </div>
  )
}

export default Navigation; 