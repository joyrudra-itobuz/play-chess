import React from "react";
import BoardSquare from "./BoardSquare";

export default function BoardRow({
  initialBoard,
  i,
}: Readonly<{ i: number; initialBoard: Array<Array<string>> }>) {
  return (
    <div key={i} className="row">
      {Array.from({ length: 8 }, (_, j) => (
        <div
          key={`${i}-${j}`}
          className={`square ${(i + j) % 2 === 0 ? "white" : "black"}`}
        >
          <BoardSquare piece={initialBoard[i][j]} />
        </div>
      ))}
    </div>
  );
}
