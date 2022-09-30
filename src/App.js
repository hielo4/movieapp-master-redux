import "./App.css";
import React, { useState, useRef } from "react";
import MovieList from "./components/MovieList";

import { useSelector, useDispatch } from "react-redux";
import { addMovie } from "./redux/features/movieSlice";

function App() {
  const dispatch = useDispatch();
  const initialState = useSelector((state) => state.movie);
  const Movies = initialState;
  const [movie, setMovie] = useState(Movies);
  const addRef = useRef(null);
  const addRef1 = useRef(null);
  const addRef2 = useRef(null);
  const addRef3 = useRef(null);
  const handleAdd = () => {
    const placeholder = {
      title: addRef.current.value,
      posterURL: addRef1.current.value,
      description: addRef2.current.value,
      rating: addRef3.current.value,
    };
    dispatch(addMovie(placeholder));
    setMovie(initialState);
  };
  return (
    <>
      <h1 className="title">Movie List</h1>

      <MovieList movies={movie}></MovieList>
      <label>movie title:</label>
      <input ref={addRef} type="text" id="title" />
      <label>movie poster:</label>
      <input ref={addRef1} type="text" id="movieposter" />
      <label>description:</label>
      <input ref={addRef2} type="text" id="description" />
      <label>rating:</label>
      <input ref={addRef3} type="text" id="rating" />

      <button onClick={handleAdd}>add movie</button>
    </>
  );
}

export default App;
