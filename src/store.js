// import { createStore, combineReducers } from "redux";
// import { counterReducer } from "./reducers/counterReducer";
// import { todoReducers } from "./reducers/todoReducers";

// const store = createStore(combineReducers({ counterReducer, todoReducers }));

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import todoReducers from "./slices/todosSlice";

export default configureStore({
  reducer: { counterReducer, todoReducers },
});
