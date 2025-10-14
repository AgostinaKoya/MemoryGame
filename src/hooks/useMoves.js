import { useState, useEffect, useCallback } from "react";

export const useMoves = () => {
  const [move, setMove] = useState([]);
  const [matched, setMatch] = useState([]);
  const [movements, setMovements] = useState(0);

  useEffect(() => {
    if (move.length === 2) {
      const [first, second] = move;

      if (first.pairId === second.pairId) {
        setMatch((prev) => [...prev, first]);
      }
      setMovements((prev) => prev + 1);
      const timeout = setTimeout(() => setMove([]), 400);
      return () => clearTimeout(timeout);
    }
  }, [move]);

  const addMove = (card, index) => {
    setMove([...move, { ...card, index }]);
  };

  const resetMoves = useCallback(() => {
    setMove([]);
    setMatch([]);
    setMovements(0);
  }, []);

  return {
    move,
    matched,
    movements,
    resetMoves,
    addMove,
  };
};
