
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Head from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import CardModal from '../CardModal/CardModal'
import { React, useState, useEffect } from 'react';
import { getPokemon, getFlavor } from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("")
  const [cardsList, setCardsList] = useState([]); //generated card list
  const [searchCard, setSearchCard] = useState([]); //card from last search query
  const [selectedCard, setSelectedCard] = useState({}) //card to use in modal
  const [selectedFlavor, setSelectedFlavor] = useState("")
  //const [loggedIn, setLoggedIn] = useState(false);

  /* Add cards to the screen */

  const handleAddCard = (data) => {
		setCardsList([data, ...cardsList]);	
	};
  const handleSetFlavor = (data) => {
		setSelectedFlavor(`${data}`);
	};
  const handleSearchDisplay = (data) => {
		setSearchCard([data]);
	};

	/*
          Calls to API
  */
  const handleGetPokemon = () => {
		const max = 1000;
		const randomInteger = Math.floor(Math.random() * max)+1;
		getPokemon(randomInteger)
			.then((data) => {
        const name = data.species.name;
		    const sprite = data.sprites.front_default;
        //const art = data
        const type1 = data.types[0].type.name
				const type2 = data.types[1] ? data.types[1].type.name : null
        handleAddCard({name, sprite, type1, type2})})
			.catch((data) => {
				console.error(data);
			});
	}
  const handleGetFlavor = (id) => {
    getFlavor(id)
      .then((data) => {
          const englishFlavor = data.flavor_text_entries.filter(
            (element) => element.language.name === "en"
          );
          const flavor = englishFlavor.length > 0 ? englishFlavor[0].flavor_text : data.flavor_text_entries[0].flavor_text;
        handleSetFlavor(flavor)
        })
        
      .catch((data) => {
        console.error(data)
      })}
  const handleGetInfo = (id) => {
    getPokemon(id)
      .then((data) => {
        const name = data.species.name;
		    const sprite = data.sprites.front_default
        const type1 = data.types[0].type.name
				const type2 = data.types[1] ? data.types[1].type.name : null
        handleSearchDisplay({name, sprite, type1, type2})
      })
      .catch((data) => {
        console.error(data)
      })
  }    
  /*
      Modal handlers
  */
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    const cardFlavor = handleGetFlavor(card.name)
    setSelectedFlavor(cardFlavor)
    setSelectedCard(card);
	};
	const handleCloseModal = () => {
		setActiveModal("");
	};
	const handleClickout = (evt) => {
		if (evt.currentTarget !== evt.target) {
			return;
		}
		handleCloseModal();
	};
  const handleDeleteItem = (e) => {
    const newItemList = cardsList.filter((item) => {
      console.log(item.name)
      console.log(e.name)
      return item.name !== e.name;
    });
    console.log(newItemList)
    setCardsList(newItemList);
    
    handleCloseModal();
}

useEffect(() => {
  if (!activeModal) return;

  const closeByEscape = (e) => {
    if (e.key === "Escape") {
      handleCloseModal();
    }
  };
  document.addEventListener("keydown", closeByEscape);
  return () => document.removeEventListener("keydown", closeByEscape);
}, [activeModal]);


  return (
    <div className="app">
      <Route path="/">        
        <Head />
        <Main 
              cardsList={cardsList}
              searchCard={searchCard}
              handleGetPokemon={handleGetPokemon}
              handleGetInfo={handleGetInfo}
              handleSelectedCard={handleSelectedCard}
              />
      </Route>
      <Footer/>
      <Route exact path="/cards">   
      {activeModal === "preview" && (
				<CardModal
					selectedCard={selectedCard}
					selectedFlavor={selectedFlavor}
          onClose={handleCloseModal}
					onClickout={handleClickout}
					handleDeleteItem={handleDeleteItem}
          isSearch={null}
					//isLoading={isLoading}
				/>
			)}</Route>
      <Route exact path="/search">   
      {activeModal === "preview" && (
				<CardModal
					selectedCard={selectedCard}
					selectedFlavor={selectedFlavor}
          onClose={handleCloseModal}
					onClickout={handleClickout}
					handleDeleteItem={handleDeleteItem}
          isSearch={1}
					//isLoading={isLoading}
				/>
			)}</Route>
    </div>
  );
}

export default App;
