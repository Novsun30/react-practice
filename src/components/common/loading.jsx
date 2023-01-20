import React from "react";
import styled from "styled-components";
import loadingImg from "../../asset/loading.svg";

export default function LoadingImg({ display }) {
  return <Img src={loadingImg} display={display} alt="loading" />;
}

const Img = styled.img`
  width: 50px;
  display: ${(props) => props.display};
`;
