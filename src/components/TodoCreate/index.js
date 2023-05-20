import React from "react";
import { TodoContext } from "../TodoContext";
import "./index.css";

function TodoCreate() {
  const { searchValue, setSearchValue, addTodo } =
    React.useContext(TodoContext);
  const [priority, setPriority] = React.useState("p4");
  const [tag, setTag] = React.useState("");

  const onSubmit = (event) => {
    // TODO: prevent empty title
    // Prevent page reload
    event.preventDefault();
    // Add todo to the list
    addTodo(searchValue, priority, tag);
    // Clear the user input
    setSearchValue("");
    setPriority("p4");
    setTag("");
  };

  const onTyping = (event) => {
    const userInput = event.target.value;
    setSearchValue(userInput);

    // MATCH PRIORITY
    // Detects if the user input contains the priority of the task
    // The priority is set as: p1, p2, p3 or p4.
    const prioritiesRegex = /(^|\s)p[1-4](\s|$)/;
    const matchPriority = userInput.match(prioritiesRegex);

    if (matchPriority) {
      // console.log("Aplicando prioridad: ", matchPriority[0]);
      setPriority(matchPriority[0].trim());
    }

    // MATCH TAG
    // Detects if the user input contains the tag of the task
    // The tag is a word no longer than 10 characters
    const tagsRegex = /(^|\s)@[a-zA-Zñ_]{1,10}(\s|$)/;
    const matchTag = userInput.match(tagsRegex);

    if (matchTag) {
      // console.log("Aplicando tag: ", matchTag[0]);
      setTag(matchTag[0].trim());
    }
  };

  // TODO: add a button to clear the input 🗑️
  return (
    <div className="taskInput">
      {/* <div className="inputProps">
        {priority && <div className="priority">{priority}</div>}
        {tag && <div className="tag">{tag}</div>}
      </div> */}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Create new tasks here!"
          value={searchValue}
          onChange={onTyping}
          className={`input-priority-${priority}`}
        />
      </form>
    </div>
  );
}

export { TodoCreate };
