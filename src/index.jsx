import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter } from "react-router-dom";
import GlobalStye from "./GlobalStyle";
import App from "./App";

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
getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <GlobalStye />
  </BrowserRouter>,
);
