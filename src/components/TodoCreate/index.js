import React from "react";
import "./index.css";

function TodoCreate({ searchValue, setSearchValue }) {
  const onTyping = (event) => {
    setSearchValue(event.target.value);
  };

  // TODO: add a button to clear the input 🗑️
  return (
    <form>
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
