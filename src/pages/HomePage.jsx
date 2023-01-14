import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/common/Nav";
import SwitchButton from "../components/common/SwitchButton";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="home-page">
        <h2>歡迎來到首頁</h2>
        <Link to="/todolist">
          <SwitchButton content="點此開始" />
        </Link>
      </main>
    </>
  );
}
