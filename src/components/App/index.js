import React from "react";
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

function App() {
  const localStorageTodosID = "TODO_V1";
  const localStorageTodos = localStorage.getItem(localStorageTodosID);
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem(localStorageTodosID, "[]");
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(parsedTodos);

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

  // Function to save todo's data to local storage
  const saveLocalStorage = (todolist) => {
    localStorage.setItem(localStorageTodosID, JSON.stringify(todolist));
  };

  // Function to mark todo's as completed
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.title === text);

    const updatedTodos = [...todos];
    updatedTodos[todoIndex].completed = !updatedTodos[todoIndex].completed;

    setTodos(updatedTodos);
    saveLocalStorage(updatedTodos);
  };

  // Function to remove todo's
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.title === text);

    const updatedTodos = [...todos];
    updatedTodos.splice(todoIndex, 1);

    setTodos(updatedTodos);
    saveLocalStorage(updatedTodos);
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
