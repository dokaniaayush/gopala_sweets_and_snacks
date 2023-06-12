import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import './index'
import Navbar from './components/Navbar';
import Body from './components/Body';
import Order from './components/Order';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Bottombar from './components/Bottombar';

const text1 = "Go to cart";
const text2 = "Place Order";
const link1 = "/order";
const link2 = "/";

const queryClient = new QueryClient()

function App() {  
  return (
    <QueryClientProvider client = {queryClient}>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path = '/gopala_sweets_and_snacks_app'>
            <Body/>
            <Bottombar buttonText = {text1} link = {link1}/>
          </Route>
          <Route path="/order">
            <Order/>
            <Bottombar buttonText = {text2} link = {link2}/>
          </Route>
        </Switch>
      </Router>
      {/* <ReactQueryDevtools initialIsOpen={false} position='bottom-right' /> */}
    </QueryClientProvider>
  );
}

export default App;