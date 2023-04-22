import React from "react";
import "./index.css";

function TodoCounter({ completedTodos, totalTodos }) {
  return (
    <p className="TodoCounter">
      Tasks: {completedTodos} of {totalTodos} completed
    </p>
  );
}

export { TodoCounter };
