import React, { Component } from 'react';
import "./assets/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import StatesCards from './components/StatesCards';


function App() {
  return (
      <div className="" id="dark">
        <Router>
            <Home />
            <StatesCards />
            {/* <div className="content">
            <Switch>
                <Route exact path="">
            </Switch>
            </div> */}
        </Router>
      </div>
  )
}
//https://andela.com/insights/react-js-tutorial-on-creating-a-custom-select-dropdown/
export default App;
