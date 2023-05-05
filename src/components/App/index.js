import React from "react";
import { TodoProvider } from "../TodoContext";
import { TodoHeader } from "../TodoHeader";
import { TodoCreate } from "../TodoCreate";
import { TodoList } from "../TodoList";

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

function App() {
  return (
    <TodoProvider>
      <TodoHeader />
      <TodoList />
      <TodoCreate />
    </TodoProvider>
  );
}

export default App;
