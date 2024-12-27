import React from "react";
import BoardRow from "./BoardRow";
import { initialBoard } from "./BoardData";
import "./ChessBoardStyle.scss";

export default function ChessBoard() {
  return (
    <div className="board">
      {Array.from({ length: 8 }, (_, i) => (
        <BoardRow key={i} i={i} initialBoard={initialBoard} />
      ))}
    </div>
  );
}
