const INITIAL_STATE = {
  todos: [],
};

export const todoReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD":
      return { todos: [...state.todos, action.payload] };
    case "REMOVE":
      const newArr = state.todos.filter(
        (item, index) => index !== action.payload
      );
      return { todos: [...newArr] };
    default:
      return state;
  }
};
