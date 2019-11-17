import React from "react";
import "./App.css";
import MTCard from "./MTcard";
import logo from "./img/netflix-logo.png";
import endgame from "./img/avengers.jpg";
import deadpool from "./img/deadpool-2.jpg";

function App() {
  return (
    <div className="App">
      <img className="Logo" src={logo} />
      <div className="latest">
        <h1>Latest Movies & TV Shows</h1>
      </div>

      <div className="card-content">
        <MTCard
          backgrnd={endgame}
          imdblink="https://www.imdb.com/title/tt4154796/"
          name="Avengers: Endgame"
          rating="8.5"
          dateadded="Sun 8 Sept"
          runtime="2hr 09min"
        />

        <MTCard
          backgrnd={deadpool}
          imdblink="https://www.imdb.com/title/tt1431045/"
          name="Deadpool"
          rating="8.0"
          dateadded="Sun 8 Sept"
          runtime="1hr 48min"
        />
      </div>
    </div>
  );
}

export default App;
