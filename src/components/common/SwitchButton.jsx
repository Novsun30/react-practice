import React from "react";
import "./SwitchButton.scss";

export default function SwitchButton({ content }) {
  return (
    <button type="button" className="switch-button">
      {content}
    </button>
  );
}
