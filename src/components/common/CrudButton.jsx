import React from "react";
import styled from "styled-components";

export default function CrudButton({
  content, onClick, id, className,
}) {
  return (
    <Button type="button" onClick={onClick} id={id} className={("crud-button", className)}>
      {content}
    </Button>
  );
}

const Button = styled.button`
  background-color: #666;
  min-width: 60px;
  width: 60px;
  height: 40px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
