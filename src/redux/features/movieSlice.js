import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
  },
});
export default movieSlice.reducer;
export const { addMovie } = movieSlice.actions;
