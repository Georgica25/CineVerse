import React, { useState, useEffect } from "react";
import requestsWithAPIKey, { options } from "../api/apiConfig";
import MovieItem from "./MovieItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/style.css";
import { NavLink } from "react-router-dom";

const Toprated = ({ settings }) => {
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
          ? responseData
          : responseData.results || [];

        setData(dataArray);
        console.log(dataArray);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
      }
    };

    fetchData(requestsWithAPIKey.fetchTopRated, options);
  }, []);

  return (
    <div className="trending">
      <h1>Top Rated movies</h1>
      <Slider {...settings}>
        {data.map((item) => (
          <NavLink key={item.id} to={`/movie/${item.id}`}>
            <MovieItem
              key={item.id}
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

export default Toprated;
