import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, addDoc, serverTimestamp, getDocs,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "../components/common/Nav";
import InputForm from "../components/InputForm";
import ToDoList from "../components/ToDoList";
import SwitchButton from "../components/common/SwitchButton";
import LoadingImg from "../components/common/loading";

const firebaseConfig = {
  apiKey: "AIzaSyBC9lI_UnQHhQaLPjsSP1x5RXEHtaqvJUA",
  authDomain: "react-practice-8ef79.firebaseapp.com",
  projectId: "react-practice-8ef79",
  storageBucket: "react-practice-8ef79.appspot.com",
  messagingSenderId: "554889288648",
  appId: "1:554889288648:web:fdc234be92b556e5113efd",
  measurementId: "G-EHQJTE8WE7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function ListPage() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [userId, setUserId] = useState("");
  const [status, setStatus] = useState("");
  const [display, setDisplay] = useState("none");

  async function fetchUserData() {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setStatus(true);
        setUserId(user.uid);
      } else {
        setStatus(false);
      }
    });
  }

  async function fetchListData() {
    const querySnapshot = await getDocs(collection(db, userId));
    querySnapshot.forEach((doc) => {
      setList((prevList) => [...prevList, { id: doc.id, name: doc.data().list }]);
    });
    setDisplay("none");
  }

  useEffect(() => {
    setDisplay("block");
    fetchUserData();
    if (status === true) {
      fetchListData();
    }
  }, [userId]);

  function handleInputChange(e) {
    setInput(e.target.value);
  }
  async function handleSubmit() {
    if (input.trim() === "") {
      setInput("");
      return;
    }
    setDisplay("block");
    const docRef = await addDoc(collection(db, userId), {
      list: input,
      timestamp: serverTimestamp(),
    });
    setList((prevList) => [...prevList, { id: docRef.id, name: input }]);
    setInput("");
    setDisplay("none");
  }

  if (status === false) {
    window.location.href = "/";
  }
  if (status === true) {
    return (
      <>
        <Nav />
        <Main className="to-do-list-page">
          <InputForm
            value={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />

          <ToDoList list={list} setList={setList} userId={userId} />
          <LoadingImg display={display} />
          <Link to="/">
            <StyledSwitchButton content="返回首頁" />
          </Link>
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

const StyledSwitchButton = styled(SwitchButton)`
  margin-top: 20px;
`;
