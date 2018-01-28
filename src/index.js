import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import "./index.css";

ReactDOM.render(
  <Board knightPosition={[6, 4]} />,
  document.getElementById("root")
);
