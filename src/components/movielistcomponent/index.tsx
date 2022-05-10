import React from "react";



export const MovieListComponent = ({ item, index }:any) => {
  return (
    <div className="moviesListContainer-item" key={index}>
      <div className="moviesListContainer-image">
        <img
          src={item.images?.["Poster Art"]?.url || item.images.PosterArt.url}
          style={{ width: "100%", height: "100%" }}
          alt="movie"
        />
      </div>
      <div className="moviesListContainer-desc">
        <h6>{item.title}</h6>
        <h6>{item.releaseYear}</h6>
      </div>
    </div>
  );
};
