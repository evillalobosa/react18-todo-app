import React from "react";
import { TodoContext } from "../TodoContext";
import "./index.css";

function TodoCreate() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const [priority, setPriority] = React.useState("");
  const [tag, setTag] = React.useState("");

  const onSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
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
      console.log("Aplicando prioridad: ", matchPriority[0]);
      setPriority(matchPriority[0]);
    }

    // MATCH TAG
    // Detects if the user input contains the tag of the task
    // The tag is a word no longer than 10 characters
    const tagsRegex = /(^|\s)@[a-zA-Z]{1,10}(\s|$)/;
    const matchTag = userInput.match(tagsRegex);

    if (matchTag) {
      console.log("Aplicando tag: ", matchTag[0]);
      setTag(matchTag[0]);
    }
  };

  // TODO: add a button to clear the input 🗑️
  return (
    <div className="taskInput">
      <div className="inputProps">
        {priority && <div className="priority">{priority}</div>}
        {tag && <div className="tag">{tag}</div>}
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Create new tasks here!"
          value={searchValue}
          onChange={onTyping}
        />
      </form>
    </div>
  );
}

export { TodoCreate };
