import React from "react";
import { TodoContext } from "../TodoContext";
import "./index.css";

function TodoFilter() {
  const { todos, filterTag, setFilterTag } = React.useContext(TodoContext);

  const tags = [...new Set(todos.map((item) => item.tag))];

  const onClick = (tag) => {
    if (filterTag === tag) {
      setFilterTag("");
    } else {
      setFilterTag(tag);
    }
  };

  return (
    <div className="todo-filter">
      {tags.length === 0 ? (
        <div className="todo-tag-none">TIP: Crea un tag añandiendo @tag</div>
      ) : (
        tags.map((tag) => (
          <button
            key={tag}
            className={`todo-tag ${
              filterTag === tag ? "todo-tag-selected" : ""
            }`}
            onClick={() => onClick(tag)}
          >
            {tag}
          </button>
        ))
      )}
    </div>
  );
}

export { TodoFilter };
