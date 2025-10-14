export const isFlipped = ({ card, matched, index, move }) => {
  if (
    matched.find((m) => m.uid === card.uid) ||
    move.find((m) => m.index === index)
  )
    return true;
};
