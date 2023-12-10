import React from 'react';
import './Main.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import CardSection from '../CardSection/CardSection';
import Card from '../Card/Card'

function Main () {
  return (
    <>
    <Route exact path="/home">
    <div className="main">
      <h1>fak u</h1>
      <p>
        fuck u
      </p>
    </div>
    </Route>
    <Route exact path="/cards">
    <div className="main">
      <CardSection>
        <Card/>
        <Card/>
      </CardSection>
    </div>
    </Route>
    <Route exact path="/signup">
    <div className="main">
      <h1>signup</h1>
    </div>
    </Route>
    </>
  )
}

export default Main; 