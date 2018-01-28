import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import observe from "./Game";
import "./index.css";

const rootEL = document.getElementById("root");

observe(knightPosition =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, rootEL)
);
