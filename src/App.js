import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "./actions/Actions";
import { increment, decrement } from "./slices/counterSlice";
// import { add } from "./actions/todoActions";
import TodoItem from "./components/TodoItem";
import { add } from "./slices/todosSlice";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer);
  const todos = useSelector((state) => state.todoReducers);
  let nameInputRef = useRef();
  let statusInputRef = useRef();

  const clickHandler = (event) => {
    event.preventDefault();
    dispatch(
      add({
        name: nameInputRef.current.value,
        status: statusInputRef.current.value,
      })
    );
    nameInputRef.current.value = "";
    statusInputRef.current.value = "";
  };
  return (
    <div className="App">
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className="text-center d-block p-2 bg-dark text-white ">
        count: {counter}
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <form onSubmit={clickHandler}>
        <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Name
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            ref={nameInputRef}></input>
        </div>
        <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Status
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            ref={statusInputRef}></input>
        </div>
        <button className="btn btn-primary" type="submit">
          add todo
        </button>
      </form>
      {todos.map((item, index) => (
        <TodoItem
          key={index}
          name={item.name}
          status={item.status}
          index={index}
        />
      ))}
    </div>
  );
}

export default App;
