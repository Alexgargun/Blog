import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../features/counter/todoSlice";

const ListItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  console.log(completed);
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo({ id }))}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </span>
    </li>
  );
};

export default ListItem;
