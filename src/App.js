import React from "react";
import "./App.css";
import MTCard from "./MTcard";
import logo from "./img/netflix-logo.png";
import endgame from "./img/avengers.jpg";
import deadpool from "./img/deadpool-2.jpg";
import maradonainmex from "./img/maradonainmex.jpg";
import fadilycamarala from "./img/fadilycamarala.jpg";
import candyonline from "./img/candyonline.jpg";
import klaus from "./img/klaus.jpg";

function App() {
  return (
    <div className="App">
      <img className="Logo" src={logo} />
      <div className="latest">
        <h1>Latest Movies & TV Shows</h1>
      </div>

      <div className="card-content">
        <MTCard
          backgrnd={klaus}
          imdblink="https://www.imdb.com/title/tt4729430/"
          tonetflix="https://www.netflix.com/title/80183187"
          name="Klaus"
          rating="8.5"
          dateadded="Sat 16 Nov"
          runtime="1hr 36min"
        />

        <MTCard
          backgrnd={candyonline}
          imdblink=""
          tonetflix="https://www.netflix.com/title/81191473"
          name="Candy Online"
          rating="NA"
          dateadded="Sat 16 Nov"
          runtime="4 Episodes"
        />

        <MTCard
          backgrnd={fadilycamarala}
          imdblink="https://www.imdb.com/title/tt11168150/"
          tonetflix="https://www.netflix.com/title/81096745"
          name="Fadily Camara: La plus drôle de tes copines"
          rating="6.8"
          dateadded="Sat 16 Nov"
          runtime="54 min"
        />

        <MTCard
          backgrnd={maradonainmex}
          imdblink="https://www.imdb.com/title/tt11168104/"
          tonetflix="https://www.netflix.com/title/81034946"
          name="Maradona in Mexico"
          rating="7.7"
          dateadded="Sat 16 Nov"
          runtime="7 Episodes"
        />

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
