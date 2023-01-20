import React from "react";
import styled from "styled-components";

export default function ErrorMessage({ content }) {
  return <P>{content}</P>;
}

const P = styled.p`
  margin: 10px 0;
`;
