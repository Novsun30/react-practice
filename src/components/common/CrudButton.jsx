import React from "react";
import "./CrudButton.scss";

export default function CrudButton({ content, onClick, id }) {
  return (
    <button type="button" onClick={onClick} id={id} className="crud-button">
      {content}
    </button>
  );
}
