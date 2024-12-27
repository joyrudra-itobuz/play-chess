import React from "react";
import BoardRow from "./BoardRow";

const initialBoard = [
  [
    "rook-b",
    "knight-b",
    "bishop-b",
    "queen-b",
    "king-b",
    "bishop-b",
    "knight-b",
    "rook-b",
  ],
  [
    "pawn-b",
    "pawn-b",
    "pawn-b",
    "pawn-b",
    "pawn-b",
    "pawn-b",
    "pawn-b",
    "pawn-b",
  ],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  [
    "pawn-w",
    "pawn-w",
    "pawn-w",
    "pawn-w",
    "pawn-w",
    "pawn-w",
    "pawn-w",
    "pawn-w",
  ],
  [
    "rook-w",
    "knight-w",
    "bishop-w",
    "queen-w",
    "king-w",
    "bishop-w",
    "knight-w",
    "rook-w",
  ],
];

export default function ChessBoard() {
  return (
    <div className="board">
      {Array.from({ length: 8 }, (_, i) => (
        <BoardRow key={i} i={i} initialBoard={initialBoard} />
      ))}
    </div>
  );
}
