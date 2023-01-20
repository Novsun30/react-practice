import React from "react";
import styled from "styled-components";
import CrudButton from "./common/CrudButton";

export default function InputForm({ value, handleInputChange, handleSubmit }) {
  return (
    <InputDiv className="input-form">
      <Input type="text" value={value} onChange={handleInputChange} />
      <CrudButton content="送出" onClick={handleSubmit} />
    </InputDiv>
  );
}

const InputDiv = styled.div`
  display: flex;
  margin: 30px 0px;
  align-items: center;
`;

const Input = styled.input`
  font-size: 18px;
  color: #000;
  width: 250px;
  height: 40px;
  padding: 5px;
  border-radius: 8px;
  margin: 0 10px;
`;
