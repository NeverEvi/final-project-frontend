
import './Main.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import CardSection from '../CardSection/CardSection';
import Page404 from '../Page404/Page404';
import Card from '../Card/Card'
import Search from '../Search/Search';



function Main ({cardsList, searchCard, handleGetPokemon, handleGetInfo}) {
  const newCardsList = cardsList;
  return (
    <>
    <Switch>
      <Route exact path="/">
      </Route>
      <Route exact path="/home">
        <div className="main">
          <h1>display  here</h1>
          <p>home page?</p>
          <p>consolidate code for routes!!!</p>
        </div>
      </Route>

      <Route exact path="/cards">
      <div className="main-cards">
        <CardSection handleGetPokemon={handleGetPokemon}>
          {newCardsList.map((x, i) => (
            <Card item={x} key={i}/>
          ))}
          
        </CardSection>
        <p>Click to view</p>
        <p>add onclick popup modals for cards</p>
      </div>
      </Route>

      <Route exact path="/search">
        <div className="main">
          <Search handleGetInfo={handleGetInfo}></Search>
          {searchCard.map((x, i) => (
            <Card item={x} key={i}/>
          ))}
          <p>display popup for pokemon</p>
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