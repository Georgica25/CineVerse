import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieItem = ({ title, posterPath, rating }) => {
  return (
    <div className="card">
      <div className="card-rating">
        <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
        <div className="rating">
          <FontAwesomeIcon icon={faStar} className="icon" />

          <p> {rating.toFixed(1)}</p>
        </div>
      </div>
      <h2 className="movie-item-title">{title}</h2>
    </div>
  );
};

export default MovieItem;
