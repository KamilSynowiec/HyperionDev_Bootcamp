import React from "react";
import "./styles.css"; //stylesheet

//Header
import Header from "./components/Header";
//Landing Page
import LandingPage from "./components/LandingPage";
//Product 1
import Product1 from "./components/Product1";
//Product 2
import Product2 from "./components/Product2";
//Products 3
import Product3 from "./components/Product3";


//creating pageComponents array where all components are inserted as a object 
let pageComponents = [];
pageComponents.push({ display: <Header name="Michael" isLoggedIn={true} /> });
pageComponents.push({ display: <LandingPage /> });
pageComponents.push({ display: <Product1 /> });
pageComponents.push({ display: <Product2 /> });
pageComponents.push({ display: <Product3 /> });


//displaying components from array
function App() {
  return (
    <div>
      {pageComponents[0].display}
      {pageComponents[1].display}
      {pageComponents[2].display}
      {pageComponents[3].display}
      {pageComponents[4].display}
   
  
    </div>
  );
}

export default App;
