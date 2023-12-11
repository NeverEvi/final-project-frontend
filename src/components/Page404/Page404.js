import React from 'react';
import missingno from '../../images/missingno.png';
import './Page404.css';

function Page404 () {
  return (
    <div className='page404'>
    <h1 className='error-title'>404</h1>
    <h2 className='error-subtitle'>Page not found</h2>
    <img src={missingno} className="error-logo" alt="logo" />
    </div>
  )
}

export default Page404; 