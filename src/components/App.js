import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoCreate } from './TodoCreate';
import { TodoList } from './TodoList';
// import './App.css';

function App() {
  return (
    <React.Fragment>
        <h1>To-Do App</h1>

        <TodoCounter/>

        <TodoList/>

        <TodoCreate/>
    </React.Fragment>
  );
}

export default App;