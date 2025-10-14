import "./Card.css";

export const Card = ({ card, index, onClick, isFlipped }) => {
  const classes = `card ${isFlipped ? "flipped" : ""}`;


  return (
    <div className={classes} onClick={() => onClick(index, card)}>
      <div className="card__inner">
        <div className="card__face card__back">
          <span className="card__icon answer">?</span>
        </div>
        <div className="card__face card__front">
          <span className="card__icon">{card.icon}</span>
        </div>
      </div>
    </div>
  );
};
