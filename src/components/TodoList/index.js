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

  const priorityOrder = {
    p1: 1,
    p2: 2,
    p3: 3,
    p4: 4,
  };

  searchedTodos.sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );

  return (
    <section>
      {error && <TodoError />}
      {loading && <TodoLoading />}
      {!error && !loading && !searchedTodos.length && <TodoEmpty />}

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
              tag={todo.tag}
              onComplete={() => completeTodo(todo.title)}
              onDelete={() => deleteTodo(todo.title)}
            />
          ))}
      </ul>
    </section>
  );
}

export { TodoList };
