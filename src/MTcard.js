import React from "react";
import "./MTCard.css";

function MTCard(props) {
  let styles = {
    backgroundImage: `url(${props.backgrnd})`
  };

  return (
    <div className="card-view">
      <div className="card-header" style={styles}>
        <div className="card-header-icon">
          <a href="#">
            <i className="material-icons header-icon">►</i>
          </a>
        </div>
      </div>

      <div className="card-movie-content">
        <div className="card-movie-content-head">
          <a href={props.imdblink}>
            <h3 className="card-movie-title">{props.name}</h3>
          </a>
          <div className="ratings">
            <span>{props.rating}</span>/IMDb
          </div>
        </div>
        <div className="card-movie-info">
          <div className="movie-running-time">
            <label>Date Added</label>
            <span>{props.dateadded}</span>
          </div>
          <div className="movie-running-time">
            <label>Running time</label>
            <span>{props.runtime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MTCard;
