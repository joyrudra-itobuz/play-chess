"use client";

import React, { useState } from "react";
import "./ChessBoardStyle.scss";
import { Chess, Square } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function ChessBoard() {
  const [game, setGame] = useState(new Chess());
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [optionSquares, setOptionSquares] = useState({});

  function getMoveOptions(square: Square) {
    const moves = game.moves({
      square,
      verbose: true,
    });

    if (moves.length === 0) {
      return;
    }

    const newSquares = {};
    moves.forEach((move) => {
      newSquares[move.to] = {
        background:
          game.get(move.to) &&
          game.get(move.to).color !== game.get(square).color
            ? "radial-gradient(circle, rgba(255,0,0,.5) 85%, transparent 85%)"
            : "radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)",
        borderRadius: "50%",
      };
    });
    newSquares[square] = {
      background: "rgba(255, 255, 0, 0.4)",
    };
    setOptionSquares(newSquares);
  }

  function makeAMove(sourceSquare: string, targetSquare: string) {
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q", // always promote to queen for simplicity
      });
      setGame(new Chess(game.fen()));
      return move;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  function onSquareClick(square: Square) {
    if (selectedSquare === null) {
      // First click - show possible moves
      const piece = game.get(square);
      if (piece && piece.color === (game.turn() === "w" ? "white" : "black")) {
        setSelectedSquare(square);
        getMoveOptions(square);
      }
    } else {
      // Second click - make the move if valid
      const move = makeAMove(selectedSquare, square);
      setSelectedSquare(null);
      setOptionSquares({});

      if (move === null) {
        // If invalid move, show options for the new square if it has a piece
        const piece = game.get(square);
        if (
          piece &&
          piece.color === (game.turn() === "w" ? "white" : "black")
        ) {
          setSelectedSquare(square);
          getMoveOptions(square);
        }
      }
    }
  }

  function onDrop(sourceSquare: string, targetSquare: string) {
    const move = makeAMove(sourceSquare, targetSquare);
    setSelectedSquare(null);
    setOptionSquares({});
    return move !== null;
  }

  return (
    <div className="board-wrapper">
      <Chessboard
        position={game.fen()}
        onPieceDrop={onDrop}
        onSquareClick={onSquareClick}
        customSquareStyles={optionSquares}
        boardWidth={560}
      />
    </div>
  );
}
