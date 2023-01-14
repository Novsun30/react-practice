import React from "react";
import CrudButton from "./common/CrudButton";
import "./InputForm.scss";

export default function InputForm({ value, handleInputChange, handleSubmit }) {
  return (
    <div className="input-form">
      <input type="text" value={value} onChange={handleInputChange} />
      <CrudButton content="送出" onClick={handleSubmit} />
    </div>
  );
}
