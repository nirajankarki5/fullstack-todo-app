import React from "react";

const List = ({ list }) => {
  return (
    <ul className="todo-list">
      {list.map((item) => {
        return (
          <li key={item.id} className="list-item">
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
