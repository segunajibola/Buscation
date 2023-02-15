import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import AllStatesCards from "../components/AllStatesCards";
import ParticularState from "../components/ParticularState";
import ParticularCenter from "../components/ParticularCenter";
import Footer from "../components/Footer";
import NotFound from "../components/NotFound";
import destination from "../data/allDestinations.js";
import Login from "../components/Login/Login";

const AppRouter = ({ handleMode, darkMode }) => {
  return (
    <Router>
      <Navbar handleMode={handleMode} darkMode={darkMode} />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route
          path="/all-states"
          element={<AllStatesCards destination={destination} />}
        />

        <Route
          path="/:state/:center"
          element={<ParticularCenter destination={destination} />}
        />

        <Route
          path="/:state"
          element={<ParticularState destination={destination} />}
        />

        <Route path="/log-in" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
