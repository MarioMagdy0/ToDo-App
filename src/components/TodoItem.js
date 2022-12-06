import { useDispatch } from "react-redux";
// import { remove } from "../actions/todoActions";
import { remove } from "../slices/todosSlice";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todoReducers.todos);
  console.log(props.index);

  return (
    <div className="card" style={{ width: " 18 rem" }}>
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <p className="card-text">{props.status}</p>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(remove(props.index))}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
