import React from "react";
import "./TodoCreate.css";

function TodoCreate() {
  const onTyping = (event) => {
    console.log(event.target.value);
  };

  // TODO: add a button to clear the input 🗑️
  return (
    <form>
      <input
        type="text"
        placeholder="Create new tasks here!"
        onChange={onTyping}
      />
    </form>
  );
}

export { TodoCreate };
