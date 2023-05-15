import React from "react";
import { TodoContext } from "../TodoContext";
import "./index.css";

function TodoHeader() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  let completionMsg = "";
  if (totalTodos === 0) {
    completionMsg = "❄️ No hay tareas pendientes";
  } else if (completedTodos === totalTodos) {
    completionMsg = "🥳 Todas las tareas completadas";
  } else {
    completionMsg = `Tasks: ${completedTodos} of ${totalTodos} completed`;
  }

  return (
    <div className="header">
      <h1>To-Do App</h1>
      <p className="TodoCounter">{completionMsg}</p>
    </div>
  );
}

export { TodoHeader };
