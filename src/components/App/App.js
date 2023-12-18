
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Head from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { React, useState } from 'react';
import { getPokemon, getFlavor } from "../../utils/api";

function App() {
  const [cardsList, setCardsList] = useState([]);
  const [searchCard, setSearchCard] = useState([]);
  const handleAddCard = (data) => {
		console.log("making card: "+ data.name)
		setCardsList([data, ...cardsList]);
			
	};
  const handleSearchDisplay = (data) => {
		console.log("making card")
    console.log(data)
		setSearchCard([data]);
			
	};
	
  const handleGetPokemon = () => {
		const max = 1000;
		const randomInteger = Math.floor(Math.random() * max)+1;
		console.log(randomInteger);
		getPokemon(randomInteger)
			.then((data) => {
        const name = data.species.name;
		    const sprite = data.sprites.front_default;
        const type1 = data.types[0].type.name
				const type2 = data.types[1] ? data.types[1].type.name : "none"
        handleAddCard({name,sprite, type1, type2})})
			.catch((data) => {
				console.error(data);
			});
	}
  const handleGetFlavor = (id) => {
    getFlavor(id)
      .then((data) => {
        const flavor = data.flavor_text_entries[0].flavor_text
        console.log(flavor)})
        
      .catch((data) => {
        console.error(data)
      })}
  const handleGetInfo = (id) => {
    getPokemon(id)
      .then((data) => {
        const name = data.species.name;
		    const sprite = data.sprites.front_default;
        const type1 = data.types[0].type.name
				const type2 = data.types[1] ? data.types[1].type.name : "none"
        handleSearchDisplay({name,sprite, type1, type2})
      })
  }    
  
  return (
    <div className="App">
      <link href="https://fonts.cdnfonts.com/css/pokemon-solid" rel="stylesheet"/>
      <Route path="/">        
        <Head />
        <Main 
              cardsList={cardsList}
              searchCard={searchCard}
              handleGetPokemon={handleGetPokemon}
              handleGetInfo={handleGetInfo}
              />
      </Route>
      <Footer/>
    </div>
  );
}

export default App;
