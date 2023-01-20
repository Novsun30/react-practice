import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "../components/common/Nav";
import SwitchButton from "../components/common/SwitchButton";
import LogInForm from "../components/LogInForm";
import SignUpForm from "../components/SignUpForm";
import CrudButton from "../components/common/CrudButton";

export default function HomePage() {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  function handleSignOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
      setStatus(false);
    });
  }
  async function logInCheck() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
        setStatus(true);
      } else setStatus(false);
    });
  }
  useEffect(() => {
    logInCheck();
  }, []);
  if (status === true) {
    return (
      <>
        <Nav />
        <Main className="home-page">
          <H2>歡迎來到首頁</H2>
          <H2>
            你好，
            {email}
          </H2>
          <StyledCrudButton content="登出" onClick={handleSignOut} />
          <Link to="/todolist">
            <SwitchButton content="點此開始" />
          </Link>
        </Main>
      </>
    );
  }
  if (status === false) {
    return (
      <>
        <Nav />
        <Main className="home-page">
          <H2>歡迎來到首頁</H2>
          <SignUpForm />
          <LogInForm setStatus={setStatus} />
        </Main>
      </>
    );
  }
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H2 = styled.h2`
  margin: 30px 0;
`;

const StyledCrudButton = styled(CrudButton)`
  margin-bottom: 50px;
`;
