import React from 'react';
import './Main.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import CardSection from '../CardSection/CardSection';
import Card from '../Card/Card'
import Page404 from '../Page404/Page404';



function Main () {
  return (
    <>
    <Switch>
    <Route exact path="/home">
    <div className="main">
      <h1>display  here</h1>
      <p>
        home page?
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
    <Route path='*'>
      <div className='main'>
        <Page404/>
        </div>
    </Route>
    </Switch>
    </>
  )
}

export default Main; 