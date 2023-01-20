import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";
import CrudButton from "./common/CrudButton";
import Input from "./common/Input";
import ErrorMessage from "./common/ErrorMessage";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  async function handleSubmit() {
    if (email.trim() === "" || password.trim() === "") {
      setEmail("");
      return;
    }
    const auth = getAuth();
    const result = await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {})
      .catch((error) => {
        const re = /(?<=auth\/).*(?=\).)/;
        let errorMessage = error.message;
        errorMessage = errorMessage.match(re);
        setErrorMsg(errorMessage);
        return "error";
      });
    if (result === "error") {
      return;
    }
    setEmail("");
    setPassword("");
  }

  return (
    <SignUpDiv className="Sign-up-Form">
      <H3>註冊帳號</H3>
      <Div>
        <Label htmlFor="email-sign-up">信箱</Label>
        <Input
          width="200px"
          attrId="email-sign-up"
          handleInputChange={handleEmailChange}
          value={email}
        />
      </Div>
      <Div>
        <Label htmlFor="password-sign-up">密碼</Label>
        <Input
          width="200px"
          attrId="password-sign-up"
          handleInputChange={handlePasswordChange}
          value={password}
        />
      </Div>
      <CrudButton content="送出" onClick={handleSubmit} />
      <ErrorMessage content={errorMsg} />
    </SignUpDiv>
  );
}

const SignUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;
const Label = styled.label`
  font-size: 20px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const H3 = styled.h3`
  margin-bottom: 10px;
`;
