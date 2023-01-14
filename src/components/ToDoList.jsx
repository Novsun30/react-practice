import React from "react";
import CrudButton from "./common/CrudButton";
import "./ToDoList.scss";

export default function ToDoList({ list, setList }) {
  function handleDeleteItem(e) {
    const result = list.filter((element) => e.target.id !== element.id);
    setList(result);
  }
  const listItems = list.map((item) => (
    <div key={item.id} className="list-item">
      <p>{item.name}</p>
      <CrudButton onClick={handleDeleteItem} id={item.id} content="刪除" />
    </div>
  ));
  return listItems;
}
