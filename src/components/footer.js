import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content_menus">
        <div className="center">
          <div className="logo">
            <h1>
              <span>C</span>ine<span>V</span>erse
            </h1>
          </div>
          <div className="footer_content_menu">
            <Link className="link-item" to="/">
              Home
            </Link>
            <Link className="link-item" to="/">
              Contact us
            </Link>
            <Link className="link-item" to="/">
              Term of services
            </Link>
            <Link className="link-item" to="/">
              About us
            </Link>
          </div>
          <div className="footer_content_menu">
            <Link className="link-item" to="/">
              Live
            </Link>
            <Link className="link-item" to="/">
              FAQ
            </Link>
            <Link className="link-item" to="/">
              Premium
            </Link>
            <Link className="link-item" to="/">
              Pravacy policy
            </Link>
          </div>
          <div className="footer_content_menu">
            <Link className="link-item" to="/">
              You must watch
            </Link>
            <Link className="link-item" to="/">
              Recent release
            </Link>
            <Link className="link-item" to="/">
              Top IMDB
            </Link>
          </div>
        </div>
        <p>
          Created by
          <a className="link-item pink" href="#" target="_blank">
            Dregan Georgiana
          </a>
          using
          <a className="link-item pink" href="#" target="_blank">
            TMDB API
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
