import React from "react";
import styled from "styled-components";

export default function Nav() {
  return (
    <NavBar>
      <h1>React練習專案</h1>
    </NavBar>
  );
}

const NavBar = styled.nav`
  background-color: #db5004;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;
