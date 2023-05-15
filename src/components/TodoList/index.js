import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoItem } from "../TodoItem";
import "./index.css";
import { TodoError } from "../TodoError";
import { TodoLoading } from "../TodoLoading";
import { TodoEmpty } from "../TodoEmpty";

function TodoList() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);

  return (
    <section>
      {error && <TodoError error={error} />}
      {loading && <TodoLoading />}
      {!loading && !searchedTodos.length && <TodoEmpty />}

      <ul>
        {/* MUESTRA LOS NO COMPLETADOS */}
        {/* TODO: order by priority */}
        {searchedTodos
          .filter((todo) => todo.completed === false)
          .map((todo) => (
            <TodoItem
              key={todo.title}
              title={todo.title}
              created={todo.created}
              completed={todo.completed}
              priority={todo.priority}
              tag={todo.tag}
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
