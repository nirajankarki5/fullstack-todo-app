import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const List = ({ list, fetchList, handleSubmit, handleEdit, handleDelete }) => {
  return (
    <ul className="todo-list">
      {list.map((item) => {
        return (
          <li key={item.id} className="list-item">
            <p>{item.title}</p>
            <div className="icon-div">
              <AiOutlineEdit
                className="icon icon-edit"
                onClick={() => handleEdit(item.id)}
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
