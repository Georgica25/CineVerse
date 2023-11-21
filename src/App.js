import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import MoviesList from "./components/MoviesList";
import TvSeries from "./components/TvSeries";
import MovieDetails from "./components/MovieDetails";
import Footer from "./components/footer";
import Banner from "./components/Banner";
import { bannerSettings } from "./shared/sliderSettings";

const App = () => {
  const movie = "movie";
  const tvSeries = "tv-series";
  const sliderSet = bannerSettings;

  return (
    <Router>
      <div className="content">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner settings={sliderSet} />
                <div className="container">
                  <Home />
                </div>
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <div className="container">
                <MoviesList />
              </div>
            }
          />
          <Route
            path="/tv-series"
            element={
              <div className="container">
                <TvSeries />
              </div>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <div className="container">
                <MovieDetails type={movie} />
              </div>
            }
          />
          <Route
            path="/tv-series/:id"
            element={
              <div className="container">
                <MovieDetails type={tvSeries} />
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
