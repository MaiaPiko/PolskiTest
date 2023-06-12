import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    points: 0,
  };

  const scoreSlice = createSlice({
    name: "point",
    initialState,
    reducers: {
      addPoint: (state, action) => {
        state.points ++;
      },
      noPoint: (state, action) => {
        state.points +=0;
      },
      addHalfPoint:(state, action) =>{
        state.points += 0.5;
      }, 
      restart:(state, action) =>{
        state.points = 0;
      }
    },
  });

  export const { addPoint, noPoint, addHalfPoint, restart } = scoreSlice.actions;

export default scoreSlice.reducer;