import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import Nav from "../components/common/Nav";
import InputForm from "../components/InputForm";
import ToDoList from "../components/ToDoList";
import SwitchButton from "../components/common/SwitchButton";
import "./ToDoListPage.scss";

export default function ListPage() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function handleInputChange(e) {
    setInput(e.target.value);
  }
  function handleSubmit() {
    if (input.trim() === "") {
      setInput("");
      return;
    }
    list.push({ id: uuidv4(), name: input });
    setList(list);
    setInput("");
  }

  return (
    <>
      <Nav />
      <main className="to-do-list-page">
        <InputForm
          value={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        <ToDoList list={list} setList={setList} />
        <Link to="/">
          <SwitchButton content="返回首頁" />
        </Link>
      </main>
    </>
  );
}
