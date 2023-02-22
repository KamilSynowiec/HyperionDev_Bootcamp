import {Routes, Route} from "react-router-dom"; 
import "./styles.css"; //stylesheet
import React from "react";

//Navigation
import NavItems from "./components/NavItems.js";
//Header
import Header from "./components/Header.js";
//Landing Page
import LandingPage from "./components/LandingPage.js";
//Shopping component
import Shopping from "./components/Shopping.js";
//Calculator
import Calculator from "./components/Calculator.js";
//legal
import Legal from "./components/Legal.js";
//Profile
import Profile from "./components/Profile.js";
  

  function App() {
    return (
      <div className="App">
        <NavItems/>
        <Header isLoggedIn={true} name="Michael"/>
        <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/shopping" element={<Shopping/>}/>
            <Route path="/legal" element={<Legal/>}/>
            <Route path="/calc" element={<Calculator/>}/>
        </Routes>
    
       
      </div>
    );
  }

export default App;
