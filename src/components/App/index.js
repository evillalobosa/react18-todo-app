import React from "react";
import { TodoProvider } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoCreate } from "../TodoCreate";
import { TodoList } from "../TodoList";
import "./index.css";

// const defaultTodos = [
//   {
//     title: "Hacer el readme del repositorio",
//     created: "2023-04-10",
//     completed: false,
//   },
//   {
//     title: "Hacer un imagen docker",
//     created: "2023-04-12",
//     completed: false,
//   },
// ];

// MAIN
function App() {
  return (
    <TodoProvider>
      {/* TODO: Convert to a header component */}
      <div className="header">
        <h1>To-Do App</h1>
        <TodoCounter ClassName="TodoCounter" />
      </div>

      <TodoList />

      <TodoCreate />
    </TodoProvider>
  );
}

export default App;
