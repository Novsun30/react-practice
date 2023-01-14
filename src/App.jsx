import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ToDoListPage from "./pages/ToDoListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/todolist" element={<ToDoListPage />} />
    </Routes>
  );
}

export default App;
