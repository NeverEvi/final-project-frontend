
import './Main.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import CardSection from '../CardSection/CardSection';
import Page404 from '../Page404/Page404';
import Card from '../Card/Card'
import Search from '../Search/Search';



function Main ({cardsList, searchCard, handleGetPokemon, handleGetInfo, handleSelectedCard}) {
  const newCardsList = cardsList;
  return (
    <>
    <div className="marquee">
	    <p>Hello, welcome to PokéCard V 1.0.1!</p>
    </div>

    <Switch>
      <Route exact path="/">
      </Route>
      <Route exact path="/home">
        <main className="main">
          <h1 className='main-title'>Welcome to PokéCard</h1>
          <h2 className='main-subtitle'>View your PokéCards in the "Cards" section</h2>
          
        </main>
      </Route>

      <Route exact path="/cards">
      <main className='main'>
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
      </main>
      </Route>

      <Route exact path="/search">
        <main className="main">
          <Search handleGetInfo={handleGetInfo}></Search>
          {searchCard.map((x, i) => (
            <Card item={x} 
            handleSelectedCard={handleSelectedCard}
            key={i}/>
          ))}
        </main>
      </Route>

      <Route exact path="/signup">
      <main className="main">
        <h1>signup</h1>
        <h2>coming soon</h2>
      </main>
      </Route>

      <Route path='*'>
        <main className='main'>
          <Page404/>
          </main>
      </Route>
    </Switch>
    </>
  )
}

export default Main; 