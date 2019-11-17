import React from "react";
import "./App.css";
import logo from "./img/netflix-logo.png";
import Nov2019 from "./content/Nov 2019/Nov2019";

function App() {
  return (
    <div className="App">
      <img className="Logo" src={logo} />

      <div className="latest">
        <h1>Latest Movies & TV Shows</h1>
      </div>

      <Nov2019 />
    </div>
  );
}

export default App;
