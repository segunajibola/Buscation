import React, { Component } from 'react';
import "./assets/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import StatesCards from './components/StatesCards';


function App() {
  return (
      <div className="" id="dark">
        <Router>
        <div className="">
            <Navbar />
            <div className="content">
            <Switch>
                <Route exact path="/">
                <Home />
                </Route>
                <Route path="/states">
                <StatesCards />
                </Route>
                {/* <Route path="/blogs/:id"> */}
                {/* <BlogDetails /> */}
                {/* </Route> */}
                <Route path="*">
                {/* <NotFound /> */}
                </Route>
            </Switch>
            </div>
        </div>
        </Router>
      </div>
  )
}
//https://andela.com/insights/react-js-tutorial-on-creating-a-custom-select-dropdown/
export default App;
