import "./GameHeader.css";
import { formatTime } from "../../logic/formatTime";


export const GameHeader = ({winner, gameOver, movements, matched, resetGame, timeLeft ,cards}) => {
  return (
    <>
      <h1 className="tittle"> Memory Game </h1>
      <div className="game-status">
        {winner && <p className="winner-message">🏆 ¡Ganaste!</p>}
        {gameOver && <p className="loser-message">⏰ Se acabó el tiempo</p>}
      </div>
      <div className="game-stats">
        <p> Movimientos: {movements}</p>
        <p> Tiempo restante: {formatTime(timeLeft)}</p>

        <p>
          Pares: {matched.length}/{cards.length}
        </p>
        <button onClick={resetGame}>Reset</button>
      </div>
    </>
  );
};
