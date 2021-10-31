import React from 'react';
import './index'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Body from './components/Body';
import Order from './components/Order';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Bottombar from './components/Bottombar';

function App() {  
  return (
    <Router>
      <Navbar/>
      <Bottombar/>
      <Switch>
        <Route exact path = '/gopala_sweets_and_snacks_app'>
          <Body/>
        </Route>
        <Route path="/order">
          <Order/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
