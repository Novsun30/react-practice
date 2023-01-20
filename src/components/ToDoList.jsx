import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import styled from "styled-components";
import CrudButton from "./common/CrudButton";

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

export default function ToDoList({ list, setList, userId }) {
  async function handleDeleteItem(e) {
    const result = list.filter((element) => e.target.id !== element.id);
    await deleteDoc(doc(db, userId, e.target.id));
    setList(result);
  }

  return list.map((item) => (
    <ListItemDiv key={item.id} className="list-item">
      <ItemP>{item.name}</ItemP>
      <CrudButton onClick={handleDeleteItem} id={item.id} content="刪除" />
    </ListItemDiv>
  ));
}

const ListItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  margin: 10px;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const ItemP = styled.p`
  margin: 0 20px;
  word-break: break-all;
  font-size: 20px;
  font-weight: 600;
`;
