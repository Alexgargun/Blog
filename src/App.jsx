import { React, useState } from "react";
//import { Counter } from "./features/counter/Counter";
import { useDispatch } from "react-redux";
import { addTodo } from "./features/counter/todoSlice";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

function App() {
  // const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const addTask = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card">
            <div className="card-image">
              <img src="./image.jpg" alt="sea" />
            </div>
            <div className="card-comments">
              <InputField
                text={text}
                handleSubmit={addTask}
                handleInput={setText}
              />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
