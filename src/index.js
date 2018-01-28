import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import "./index.css";

ReactDOM.render(
  <Board knightPosition={[3, 4]} />,
  document.getElementById("root")
);
