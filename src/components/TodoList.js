import React from "react";
import { TodoItem } from "./TodoItem";
import "./TodoList.css";

function TodoList({ todos, setTodos }) {
  return (
    <section>
      <ul>
        {/* MUESTRA LOS NO COMPLETADOS */}
        {todos
          .filter((todo) => todo.completed === false)
          .map((todo) => (
            <TodoItem
              key={todo.title}
              title={todo.title}
              created={todo.created}
              completed={todo.completed}
            />
          ))}

        {/* MUESTRA LOS COMPLETADOS */}
        {todos
          .filter((todo) => todo.completed === true)
          .map((todo) => (
            <TodoItem
              key={todo.title}
              title={todo.title}
              created={todo.created}
              completed={todo.completed}
            />
          ))}
      </ul>
    </section>
  );
}

export { TodoList };
