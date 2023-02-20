import "./styles.css"; //stylesheet
import React from "react";
import Welcome from "./components/Welcome";



function App() {
    return (
      <div className="App">
        <Welcome name="Joe Soap" age="39" />
        <Welcome name="John Handcock" age="52" />
      </div>
    );
  }

export default App;
