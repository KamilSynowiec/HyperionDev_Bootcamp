import "./styles.css"; //stylesheet
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";



function App() {
    return (
      <div className="App">
        <Header />
        <Main info="This website is fake"/>  {/*passing props */}
        <Footer />
      </div>
    );
  }

export default App;
