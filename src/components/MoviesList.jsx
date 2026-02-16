import React from "react";
import MovieItem from "./MovieItem";
const MovieList = ({ data }) => {
  return (
    <div
      style={{
        width: "1200px",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {data?.length > 0
        ? data.map((item) => <MovieItem {...item} key={item.Title} />)
        : <h1 className="Loading">Loading <span>.</span> <span>.</span> <span>.</span></h1>}
    </div>
  );
};

export default MovieList;
