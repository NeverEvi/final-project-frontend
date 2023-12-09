import logo from '../../images/Ball_icon.png';
import grass from '../../images/grass.png'
import { Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Head from '../Header/Header';

function App() {
  return (
    <div className="App">
      <link href="https://fonts.cdnfonts.com/css/pokemon-solid" rel="stylesheet"/>
               
      <header className="App-header">
      <Route exact path="/">
        <Head />
        <Link to="/home" className='App-logo-container'>
          <img src={logo} className="App-logo" alt="logo" />
          <span className='App-logo-button'></span>
        </Link>
        <img src={grass} className='App-logo-background' alt="grass"/>
      </Route>

      <Route path="/home">
        <Head />
        <Navigation/>
      </Route>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
