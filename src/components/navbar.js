import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrollPosition > 50 ? "black" : "#16181c",
    transition: "background-color 0.3s ease-out",
  };
  return (
    <nav style={navbarStyle}>
      <div className="container nav">
        <div className="logo">
          <h1>
            <span>C</span>ine<span>V</span>erse
          </h1>
        </div>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" activeclassname="active">
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/tv-series" activeclassname="active">
              TV Series
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
