import React from "react";
import { TodoContext } from "../TodoContext";
import "./index.css";

function TodoHeader() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <div className="header">
      <h1>To-Do App</h1>
      <p className="TodoCounter">
        Tasks: {completedTodos} of {totalTodos} completed
      </p>
    </div>
  );
}

export { TodoHeader };
