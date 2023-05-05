import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoItem } from "../TodoItem";
import "./index.css";

function TodoList() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);

  return (
    <section>
      {error && <p className="error">Error!</p>}
      {loading && <p className="loading">Cargando..</p>}
      {!loading && !searchedTodos.length && (
        <p className="emptyTasks">No hay tareas</p>
      )}

      <ul>
        {/* MUESTRA LOS NO COMPLETADOS */}
        {searchedTodos
          .filter((todo) => todo.completed === false)
          .map((todo) => (
            <TodoItem
              key={todo.title}
              title={todo.title}
              created={todo.created}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.title)}
              onDelete={() => deleteTodo(todo.title)}
            />
          ))}

        {/* MUESTRA LOS COMPLETADOS */}
        {searchedTodos
          .filter((todo) => todo.completed === true)
          .map((todo) => (
            <TodoItem
              key={todo.title}
              title={todo.title}
              created={todo.created}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.title)}
              onDelete={() => deleteTodo(todo.title)}
            />
          ))}
      </ul>
    </section>
  );
}

export { TodoList };
