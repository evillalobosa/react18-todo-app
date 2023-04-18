import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoCreate } from "./TodoCreate";
import { TodoList } from "./TodoList";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      {/* TODO: Convert to a header component */}
      <div className="header">
        <h1>To-Do App</h1>
        <TodoCounter ClassName="TodoCounter" />
      </div>

      <TodoList />

      <TodoCreate />
    </React.Fragment>
  );
}

export default App;
