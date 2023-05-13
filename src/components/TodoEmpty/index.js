import "./index.css";

function TodoEmpty() {
  // {!loading && !searchedTodos.length && (
  //   <p className="emptyTasks">No hay tareas</p>
  // )}

  return (
    <div className="empty">
      <h2>Vaya!</h2>
      <p>
        Parece que no hay <br />
        ninguna tarea creada
      </p>
    </div>
  );
}

export { TodoEmpty };
