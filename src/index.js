import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import "./index.css";

const rootEL = document.getElementById("root");

const observe = receive => {
  setInterval(
    () =>
      receive([Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)]),
    1000
  );
};

observe(knightPosition =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, rootEL)
);
