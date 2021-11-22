import React from 'react';
import './index'
import Navbar from './components/Navbar';
import Body from './components/Body';
import Order from './components/Order';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Bottombar from './components/Bottombar';

const text = "Go to cart";
function App() {  
  return (
    <Router>

      <Navbar/>
      

      <Switch>

        <Route exact path = '/gopala_sweets_and_snacks_app'>
          <Body/>
          <Bottombar buttonText = {text}/>
        </Route>

        <Route path="/order">
          <Order/>
          <Bottombar/>
        </Route>
        
      </Switch>

    </Router>
  );
}

export default App;
