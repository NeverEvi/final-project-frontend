
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Head from '../Header/Header';
import Main from '../Main/Main';

import Footer from '../Footer/Footer';

function App() {

  
  return (
    <div className="App">
      <link href="https://fonts.cdnfonts.com/css/pokemon-solid" rel="stylesheet"/>
      <Switch>
      <Route exact path="/">        
        <Head />
      </Route>

      <Route exact path="/home">
        <Head />
        
        <Main />
      </Route>

      <Route exact path="/cards">
        <Head />
        
        <Main />
      </Route>

      <Route exact path="/signup">
        <Head />
        
        <Main />
      </Route>

      <Route path='*'>
        <Head />
        
        <Main />
      </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
