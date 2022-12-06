import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
      return state;
    },
    remove: (state, action) => {
      return state.filter((item, index) => index !== action.payload);
    },
  },
});

export const { add, remove } = todosSlice.actions;

export default todosSlice.reducer;
