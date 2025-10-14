import { useState, useCallback } from "react";

export const useGameStatus = () => {
  const [hasStarted, setHasStarted] = useState(false);

  const selectCard = useCallback(() => {
    if (!hasStarted) {
      setHasStarted(true);
    }
  }, [hasStarted]);

  return { hasStarted, setHasStarted, selectCard };
};