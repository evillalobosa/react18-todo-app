import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoCreate } from "./TodoCreate";
import { TodoList } from "./TodoList";
import "./App.css";

const defaultTodos = [
  {
    title: "Terminar el curso de platzi",
    created: "2023-04-09",
    completed: true,
  },
  {
    title: "Hacer el readme del repositorio",
    created: "2023-04-10",
    completed: false,
  },
  {
    title: "Terminar el curso de expresiones regulares",
    created: "2023-04-12",
    completed: true,
  },
  {
    title: "Hacer mejorar la funcion de busqueda",
    created: "2023-04-12",
    completed: true,
  },
  {
    title: "Hacer un imagen docker",
    created: "2023-04-12",
    completed: false,
  },
];

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchedTodos >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoTitle = todo.title.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoTitle.includes(searchText);
    });
  }

  // Function to mark todo's as completed
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const updatedTodos = [...todos];
    updatedTodos[todoIndex].completed = true;

    setTodos(updatedTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const updatedTodos = [...todos];
    updatedTodos.splice(todoIndex, 1);

    setTodos(updatedTodos);
  };

  return (
    <React.Fragment>
      {/* TODO: Convert to a header component */}
      <div className="header">
        <h1>To-Do App</h1>
        <TodoCounter
          ClassName="TodoCounter"
          completedTodos={completedTodos}
          totalTodos={totalTodos}
        />
      </div>

      <TodoList
        todos={searchedTodos}
        setTodos={setTodos}
        onComplete={completeTodo}
        onDelete={deleteTodo}
      />

      <TodoCreate searchValue={searchValue} setSearchValue={setSearchValue} />
    </React.Fragment>
  );
}

export default App;
