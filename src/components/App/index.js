import React from "react";
import { TodoProvider } from "../TodoContext";
import { TodoHeader } from "../TodoHeader";
import { TodoFilter } from "../TodoFilter";
import { TodoList } from "../TodoList";
import { TodoCreate } from "../TodoCreate";

function App() {
  return (
    <TodoProvider>
      <TodoHeader />
      <TodoFilter />
      <TodoList />
      <TodoCreate />
    </TodoProvider>
  );
}

export default App;
