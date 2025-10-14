import { CARDS } from "../../constants/cardData";
import { Card } from "../Card/Card";
import { useEffect, useState, useCallback } from "react";
import "./Game.css";
import { shuffleCard } from "../../logic/shuffleCard";
import { isFlipped } from "../../logic/isFlipped";
import { formatTime } from "../../logic/formatTime";
import { useWinner } from "../../hooks/useWinner";
import { useTimer } from "../../hooks/useTimer";
import { INITIAL_TIME } from "../../constants/timerGame";
import { useGameStatus } from "../../hooks/useGameStatus";
import { useMoves } from "../../hooks/useMoves";
import { GameHeader } from "../GameHeader/GameHeader";

export const Game = () => {
  const [cards, setCards] = useState(() => shuffleCard(CARDS));
  const [gameOver, setGameOver] = useState(false);
  const { move, matched, movements, resetMoves, addMove } = useMoves({ cards });
  const { winner, setWinner } = useWinner({ matched, cards });
  const { hasStarted, setHasStarted, selectCard } = useGameStatus();
  const { timeLeft, setTimeLeft } = useTimer({
    initialTime: INITIAL_TIME,
    winner,
    gameOver,
    selectCard,
    hasStarted,
  });

  const touchedCard = (index, card) => {
    if (
      move.find((m) => m.index === index) ||
      move.length === 2 ||
      matched.find((m) => m.pairId === card.pairId) ||
      gameOver === true ||
      winner === true
    ) {
      return;
    }
    addMove(card, index);
    selectCard(card, index);
  };

  useEffect(() => {
    if (timeLeft === 0 && !winner) {
      setGameOver(true);
    }
  }, [timeLeft, winner]);

  const resetGame = () => {
    setHasStarted(false);
    setTimeLeft(INITIAL_TIME);
    setGameOver(false);
    setWinner(false);
    resetMoves();
      setTimeout(() => {
    setCards(shuffleCard(CARDS));
  }, 400); 
  };

  return (
    <>
      <header>
        <GameHeader
        winner={winner}
        gameOver={gameOver} movements={movements} matched={matched} resetGame={resetGame} timeLeft={timeLeft} cards={cards}
        />
      </header>

      <main className="board">
        {cards.map((card, index) => (
          <Card
            onClick={() => touchedCard(index, card)}
            card={card}
            key={index}
            isFlipped={isFlipped({ card, matched, index, move })}
          ></Card>
        ))}
      </main>
    </>
  );
};
