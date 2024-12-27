import React from "react";
import Image from "next/image";

type BoardSquareProps = Readonly<{
  piece: string;
}>;

export default function BoardSquare({ piece }: BoardSquareProps) {
  return (
    <>
      {piece && (
        <Image
          priority
          lazyBoundary="200px"
          src={`/pieces/${piece}.svg`}
          alt={piece}
          className="piece"
          width={45}
          height={45}
        />
      )}
    </>
  );
}
