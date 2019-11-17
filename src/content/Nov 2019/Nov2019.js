import React from "react";
import MTCard from "../../MTcard";

import endgame from "./img/avengers.jpg";
import deadpool from "./img/deadpool-2.jpg";
import maradonainmex from "./img/maradonainmex.jpg";
import fadilycamarala from "./img/fadilycamarala.jpg";
import candyonline from "./img/candyonline.jpg";
import klaus from "./img/klaus.jpg";
import atthedolphin from "./img/atthedolphin.jpg";
import gotheunforget from "./img/gotheunforget.jpg";
import theclubs1 from "./img/theclubs1.jpg";
import imwiththebandn from "./img/imwiththebandn.jpg";
import thestrandedtv from "./img/thestrandedtv.jpg";
import thetoysmades3 from "./img/thetoysmades3.jpg";

function Nov2019() {
  return (
    <div className="card-content">
      {/* 16 November */}
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
        name="Candy Online: S1"
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
      {/* 15 November */}
      <MTCard
        backgrnd={atthedolphin}
        imdblink="https://www.imdb.com/title/tt8612066/"
        tonetflix="https://www.netflix.com/title/81179844"
        name="At the Dolphin Bay"
        rating="7.2"
        dateadded="Sat 15 Nov"
        runtime="18 Episodes"
      />

      <MTCard
        backgrnd={gotheunforget}
        imdblink=""
        tonetflix="https://www.netflix.com/title/81162089"
        name="GO! The Unforgettable Party"
        rating="NA"
        dateadded="Sat 15 Nov"
        runtime="1hr"
      />

      <MTCard
        backgrnd={theclubs1}
        imdblink=""
        tonetflix="https://www.netflix.com/title/80238391"
        name="The Club: S1"
        rating="NA"
        dateadded="Sat 15 Nov"
        runtime="25 Episodes"
      />

      <MTCard
        backgrnd={imwiththebandn}
        imdblink=""
        tonetflix="https://www.netflix.com/title/80217594"
        name="I'm with the Band: Nasty Cherry: S1"
        rating="NA"
        dateadded="Sat 15 Nov"
        runtime="6 Episodes"
      />

      <MTCard
        backgrnd={thestrandedtv}
        imdblink="https://www.imdb.com/title/tt9310400/"
        tonetflix="https://www.netflix.com/title/80242491"
        name="The Stranded: S1"
        rating="6.6"
        dateadded="Sat 15 Nov"
        runtime="7 Episodes"
      />

      <MTCard
        backgrnd={thetoysmades3}
        imdblink="https://www.imdb.com/title/tt7053920/episodes?season=3"
        tonetflix="https://www.netflix.com/title/80161497"
        name="The Toys That Made Us: S3"
        rating="8.1"
        dateadded="Sat 15 Nov"
        runtime="4 Episodes"
      />

      {/* Dummy Data */}
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
  );
}

export default Nov2019;
