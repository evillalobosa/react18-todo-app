import React from "react";
import "./index.css";
import { MdTaskAlt, MdRadioButtonUnchecked, MdClose } from "react-icons/md";

function TodoItem(props) {
  return (
    <li>
      <button type="button" onClick={props.onComplete} className="task-icon">
        {props.completed ? (
          <MdTaskAlt color="green" size="1.5em" />
        ) : (
          <MdRadioButtonUnchecked color="black" size="1.5em" />
        )}
      </button>
      <div className={`task-details ${props.completed && "task-completed"}`}>
        <div>
          <p>{props.title}</p>
        </div>
        <div className="task-properties">
          <div>
            {props.completed ? <div>Completado</div> : <div>Pendiente</div>}{" "}
          </div>
          <div>{props.created}</div>
        </div>
      </div>
      <button
        type="button"
        onClick={props.onDelete}
        className="task-icon-delete"
      >
        <MdClose color="red" size="1.5em" />
      </button>
    </li>
  );
}

export { TodoItem };
