import React from "react";
import "../App.css";

const MovieItem = ({ Title, data, Year, Poster }) => {
  return (
    <div className="movies__grid">
      <div className="movie__card" key={Title} style={{ width: "200px" }}>
        <img
          className="movie__poster"
          src={Poster}
          alt={Title}
          style={{ width: "100%" }}
        />
        <h3 className="movie__title">{Title}</h3>
        <p className="movie__year">{Year}</p>
      </div>
    </div>
  );
};

export default MovieItem;
