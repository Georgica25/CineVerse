import { faMagnifyingGlassArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { options } from "../api/apiConfig";
import "../styles/style.css";
import MovieItem from "./MovieItem";

const MoviesList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, [page, searchTerm]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}`,
        options
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();

      const dataArray = Array.isArray(responseData)
        ? responseData
        : responseData.results || [];

      setData((prevData) =>
        page === 1 ? dataArray : [...prevData, ...dataArray]
      );
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar-container">
        <FontAwesomeIcon
          icon={faMagnifyingGlassArrowRight}
          className="search-icon"
        />
        <input
          type="text"
          placeholder="Search movies..."
          className="search-bar-input"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="movie-list">
        {filteredMovies.map((item) => (
          <NavLink key={item.id} to={`/movie/${item.id}`}>
            <MovieItem
              title={item.title || item.name}
              posterPath={item.poster_path}
              rating={item.vote_average}
            />
          </NavLink>
        ))}
      </div>
      <div className="actions">
        <button className="btn" onClick={handleLoadMore}>
          View more
        </button>
      </div>
    </div>
  );
};

export default MoviesList;
