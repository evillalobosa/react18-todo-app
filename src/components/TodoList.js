import React from 'react';
import { TodoItem } from './TodoItem';
import './TodoList.css';

const todos = [
  {
    title: "Terminar el curso de platzi",
    created: "2023-04-09",
    completed: false
  },
  {
    title: "Hacer el readme del repositorio",
    created: "2023-04-10",
    completed: false
  },
  {
    title: "Terminar el curso de expresiones regulares",
    created: "2023-04-12",
    completed: true
  }
];

function TodoList ()
{
    return (
        <section>
            <ul>
                {/* Crea un item por cada todo creado */}
                {todos.map(todo => (
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