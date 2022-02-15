import React, { Component } from 'react';
import "./assets/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import StatesCards from './components/StatesCards';
import ParticularState from './components/ParticularState';
import Footer from './components/Footer';
import NotFound from './components/NotFound';


function App() {
  return (
      <div className="" id="dark">
        <Router>
            <Navbar />
              <Switch>
                  <Route exact path="/">
                  <Home />
                  </Route>
                  <Route path="/all-states">
                  <StatesCards />
                  </Route>
                  <Route path="/states/:id">
                  <ParticularState />
                  </Route>
                  <Route path="*">
                  <NotFound />
                  </Route>
              </Switch>
            <Footer />
        </Router>
      </div>
  )
}
//https://andela.com/insights/react-js-tutorial-on-creating-a-custom-select-dropdown/
export default App;
