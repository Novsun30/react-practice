import React from "react";
import styled from "styled-components";

export default function SwitchButton({ content, className }) {
  return (
    <Button type="button" className={("switch-button", className)}>
      {content}
    </Button>
  );
}

const Button = styled.button`
  background-color: #666;
  width: 120px;
  height: 40px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
`;
