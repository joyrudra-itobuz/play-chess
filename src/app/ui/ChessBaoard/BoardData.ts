interface ChessPiece {
  piece: string;
  square: string;
}

function getSquareNotation(rank: number, file: number): string {
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = ["8", "7", "6", "5", "4", "3", "2", "1"];
  return files[file] + ranks[rank];
}

export const initialBoard: (ChessPiece | null)[][] = [
  [
    { piece: "rook-b", square: "a8" },
    { piece: "knight-b", square: "b8" },
    { piece: "bishop-b", square: "c8" },
    { piece: "queen-b", square: "d8" },
    { piece: "king-b", square: "e8" },
    { piece: "bishop-b", square: "f8" },
    { piece: "knight-b", square: "g8" },
    { piece: "rook-b", square: "h8" },
  ],
  [
    { piece: "pawn-b", square: "a7" },
    { piece: "pawn-b", square: "b7" },
    { piece: "pawn-b", square: "c7" },
    { piece: "pawn-b", square: "d7" },
    { piece: "pawn-b", square: "e7" },
    { piece: "pawn-b", square: "f7" },
    { piece: "pawn-b", square: "g7" },
    { piece: "pawn-b", square: "h7" },
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    { piece: "pawn-w", square: "a2" },
    { piece: "pawn-w", square: "b2" },
    { piece: "pawn-w", square: "c2" },
    { piece: "pawn-w", square: "d2" },
    { piece: "pawn-w", square: "e2" },
    { piece: "pawn-w", square: "f2" },
    { piece: "pawn-w", square: "g2" },
    { piece: "pawn-w", square: "h2" },
  ],
  [
    { piece: "rook-w", square: "a1" },
    { piece: "knight-w", square: "b1" },
    { piece: "bishop-w", square: "c1" },
    { piece: "queen-w", square: "d1" },
    { piece: "king-w", square: "e1" },
    { piece: "bishop-w", square: "f1" },
    { piece: "knight-w", square: "g1" },
    { piece: "rook-w", square: "h1" },
  ],
];
