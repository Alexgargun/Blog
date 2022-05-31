import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);
  return (
    <div className="card-title">
      <ul className="card-title-top">
        {todos.map((todo) => (
          <ListItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
