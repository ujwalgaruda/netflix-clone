import axios from "./axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovie] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <Link
                className="movie-link"
                to={`/movies/${movie.id}`}
                key={movie.id}
              >
                <div className="movie-card">
                  <img
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${baseUrl}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.original_name}
                  />
                  <p>{movie.title ? movie.title : movie.name}</p>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
}

export default Row;
