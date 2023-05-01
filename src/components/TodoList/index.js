import React from "react";
import { TodoItem } from "../TodoItem";
import "./index.css";

function TodoList({ todos, setTodos, onComplete, onDelete }) {
  return (
    <section>
      {error && <p className="error">Error!</p>}
      {loading && <p className="loading">Cargando..</p>}
      {!loading && !searchedTodos.length && (
        <p className="emptyTasks">No hay tareas</p>
      )}

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
              onComplete={() => onComplete(todo.title)}
              onDelete={() => onDelete(todo.title)}
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
              onComplete={() => onComplete(todo.title)}
              onDelete={() => onDelete(todo.title)}
            />
          ))}
      </ul>
    </section>
  );
}

export { TodoList };
