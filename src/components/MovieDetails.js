import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { options } from "../api/apiConfig";

const MovieDetails = ({ type }) => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        let response;
        if (type === "tv-series") {
          response = await fetch(
            `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
            options
          );
        } else {
          response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
            options
          );
        }

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const movieDetailsData = await response.json();
        setMovieDetails(movieDetailsData);
      } catch (error) {
        console.error("Error fetching movie details:", error.message);
        throw error;
      }
    };

    fetchMovieDetails();
  }, [id, type]);

  if (!movieDetails) {
    // Loading state or error handling
    return <div>Loading...</div>;
  }

  console.log(movieDetails);

  return (
    <div className="movie-details">
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <div className="details">
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.overview}</p>

        <h1>Genres: </h1>
        {movieDetails.genres.map((genre) => (
          <p className="chip" key={genre.id}>
            {genre.name}
          </p>
        ))}
      </div>
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDetails;
