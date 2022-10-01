import { useSelector } from "react-redux";

function MovieList3() {
  const movielist = useSelector((state) => state.movie.movies);
  console.log(movielist);

  return (
    <div>
      <ul>
        {movielist.map((m, i) => (
          <li key={i}>{m.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList3;
