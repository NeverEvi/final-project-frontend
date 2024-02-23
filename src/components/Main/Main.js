
import './Main.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import CardSection from '../CardSection/CardSection';
import Page404 from '../Page404/Page404';
import Card from '../Card/Card'
import Search from '../Search/Search';



function Main ({cardsList, searchCard, handleGetPokemon, handleGetInfo, handleSelectedCard}) {
  const newCardsList = cardsList;
  return (
    <main>
    <Switch>
      <Route exact path="/">
      </Route>
      <Route exact path="/home">
        <div className="main">
          <h1 className='main-title'>Welcome to PokéCard</h1>
          <h2 className='main-subtitle'>View your PokéCards in the "Cards" section</h2>
          
        </div>
      </Route>

      <Route exact path="/cards">
      <div className="main-cards">
        <CardSection handleGetPokemon={handleGetPokemon}>
          {newCardsList.map((x, i) => (
            <Card 
              item={x} 
              handleSelectedCard={handleSelectedCard} 
              key={i}
            />
          ))}
        </CardSection>
      </div>
      </Route>

      <Route exact path="/search">
        <div className="main">
          <Search handleGetInfo={handleGetInfo}></Search>
          {searchCard.map((x, i) => (
            <Card item={x} 
            handleSelectedCard={handleSelectedCard}
            key={i}/>
          ))}
        </div>
      </Route>

      <Route exact path="/signup">
      <div className="main">
        <h1>signup</h1>
        <h2>coming soon</h2>
      </div>
      </Route>

      <Route path='*'>
        <div className='main'>
          <Page404/>
          </div>
      </Route>
    </Switch>
    <main/>
  )
}

export default Main; 