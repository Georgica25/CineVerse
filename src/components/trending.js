import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import requestsWithAPIKey, { options } from "../api/apiConfig";
import "../styles/style.css";
import MovieItem from "./MovieItem";

const Trending = ({ settings }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async (url, options) => {
      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();

        const dataArray = Array.isArray(responseData)
          ? responseData.filter((movie) => movie.media_type === "movie")
          : responseData.results || [];

        setData(dataArray);
        console.log(dataArray, "this shoukld not work");
      } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
      }
    };

    fetchData(requestsWithAPIKey.fetchTrending, options);
  }, []);

  return (
    <div className="trending">
      <h1>Trending movies</h1>
      <Slider {...settings}>
        {data.map((item) => (
          <NavLink key={item.id} to={`/movie/${item.id}`}>
            <MovieItem
              title={item.title || item.name}
              posterPath={item.poster_path}
              rating={item.vote_average}
            />
          </NavLink>
        ))}
      </Slider>
    </div>
  );
};

export default Trending;
