import React, { Component } from "react";
import PropTypes from "prop-types";
import Square from "./Square";
import Knight from "./Knight";
import { moveKnight, canMoveKnight } from "./Game";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";

class Board extends Component {
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const [knightX, knightY] = this.props.knightPosition;
    const piece = x === knightX && y === knightY ? <Knight /> : null;

    return (
      <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
        <BoardSquare x={x} y={y}>
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }

  renderPiece(x, y) {
    const [knightX, knightY] = this.props.knightPosition;
    if (x === knightX && y === knightY) {
      return <Knight />;
    }
  }

  handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY);
    }
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            backgroundColor: "red",
            width: "720px",
            height: "720px",
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          {squares}
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
};

export default DragDropContext(HTML5Backend)(Board);
