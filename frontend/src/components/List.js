import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const List = ({ list, handleEdit, handleDelete }) => {
  return (
    <ul className="todo-list">
      {list.map((item) => {
        return (
          <li key={item.id} className="list-item">
            <div>
              <p>{item.title}</p>
              <p className="date">{item.date}</p>
            </div>
            <div className="icon-div">
              <AiOutlineEdit
                className="icon icon-edit"
                onClick={() => handleEdit(item.id, item.title, item.date)}
              />
              <AiOutlineDelete
                className="icon icon-delete"
                onClick={() => handleDelete(item.id)}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
