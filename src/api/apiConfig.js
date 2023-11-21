const API_KEY = "0a0429bed9e1f5fde461236a1adda439";

export const Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTA0MjliZWQ5ZTFmNWZkZTQ2MTIzNmExYWRkYTQzOSIsInN1YiI6IjY1NGJkODhjNGYzM2FkMDExZTAzNWFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0sq5M1bkeHDYJVcl6HFxUjUjUvPqrN9SzqHFKYbBOVE";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${Token}`,
  },
};

const requestsWithAPIKey = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/day?language=en-US`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
  fetchMovies: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1`,
  fetchActionMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
};
export default requestsWithAPIKey;
