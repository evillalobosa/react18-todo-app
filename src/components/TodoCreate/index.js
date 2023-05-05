import React from "react";
import { TodoContext } from "../TodoContext";
import "./index.css";

function TodoCreate() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const { priority, setPriority } = React.useState("");
  const { tag, setTag } = React.useState("");

  const onSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
  };

  const onTyping = (event) => {
    const userInput = event.target.value;
    setSearchValue(userInput);

    // MATCH PRIORITY (1-4)
    const prioritiesRegex = /(^|\s)p[1-4](\s|$)/;
    const matchPriority = userInput.match(prioritiesRegex);
    const inputHTML = document.querySelector("input");

    if (matchPriority) {
      console.log("Aplicando prioridad: ", matchPriority[0]);
      inputHTML.style.backgroundColor = "var(--color-priority1)";
    } else {
      inputHTML.style.backgroundColor = "var(--color-accent)";
    }

    // MATCH TAG
    const tagsRegex = /(^|\s)@[a-zA-Z]{1,10}(\s|$)/;
    const matchTag = userInput.match(tagsRegex);

    if (matchTag) {
      console.log("Aplicando tag: ", matchTag[0]);
    }
  };

  // TODO: add a button to clear the input 🗑️
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Create new tasks here!"
        value={searchValue}
        onChange={onTyping}
      />
    </form>
  );
}

export { TodoCreate };
