import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import requests from "../api/apiConfig";
import "../styles/banner.css";
import { NavLink } from "react-router-dom";

const Banner = ({ settings }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);

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

    fetchData(requests.fetchHorrorMovies);
  }, []);
  return (
    <div>
      <Slider {...settings} className="slider">
        {data.map((item) => (
          <div key={item.id} className="background">
            <div className="movie">
              <img
                className="banner"
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                alt=""
              />
              <div className="movie-content">
                <div className="movie-banner-details">
                  <h1>{item.title || item.name}</h1>
                  <p>{item.overview}</p>
                  <NavLink key={item.id} to={`/movie/${item.id}`}>
                    <button className="watch-now">Watch now</button>
                  </NavLink>
                </div>
                <div className="movie-image">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
