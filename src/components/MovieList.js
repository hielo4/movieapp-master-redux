import React from "react";
import MovieCard from "./MovieCard";
import "../App.css";

function MovieList({ movies }) {
  return (
    <div className="grid">
      {movies.map((movie, i) => (
        <MovieCard
          title={movie.title}
          posterURL={movie.posterURL}
          description={movie.description}
          rating={movie.rating}
          key={i}
        />
      ))}
    </div>
  );
}

export default MovieList;
