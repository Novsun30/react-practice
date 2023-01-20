import React from "react";
import styled from "styled-components";

export default function Input({
  value, handleInputChange, width, attrId,
}) {
  return (
    <StyledInput type="text" width={width} value={value} onChange={handleInputChange} id={attrId} />
  );
}

const StyledInput = styled.input`
  font-size: 18px;
  color: #000;
  width: ${(props) => props.width};
  height: 40px;
  padding: 5px;
  border-radius: 8px;
  margin: 0 10px;
`;
