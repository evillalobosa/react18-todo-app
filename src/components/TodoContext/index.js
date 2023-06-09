import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function currentDate() {
  const date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  return year + "-" + month + "-" + day + " ";
}

function TodoProvider(props) {
  const {
    item: todos,
    saveLocalStorage: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [filterTag, setFilterTag] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchedTodos >= 1) {
    searchedTodos = todos;
  } else if (filterTag !== "") {
    searchedTodos = todos.filter((todo) => todo.tag === filterTag);
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoTitle = todo.title.toLowerCase();
      const todoTag = todo.tag.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoTitle.includes(searchText) || todoTag.includes(searchText);
    });
  }

  // Function to create a new to-do
  const addTodo = (text, priority, tag) => {
    const title = text.replace(priority, "").replace(tag, "");

    const updatedTodos = [...todos];
    updatedTodos.push({
      title: title,
      completed: false,
      created: currentDate(),
      priority: priority,
      tag: tag,
    });

    saveTodos(updatedTodos);
  };

  // Function to mark todo's as completed
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.title === text);

    const updatedTodos = [...todos];
    updatedTodos[todoIndex].completed = !updatedTodos[todoIndex].completed;

    saveTodos(updatedTodos);
  };

  // Function to remove todo's
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.title === text);

    const updatedTodos = [...todos];
    updatedTodos.splice(todoIndex, 1);

    saveTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        filterTag,
        setFilterTag,
        addTodo,
        completeTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
