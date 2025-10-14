import { useState, useEffect } from "react";

export const useTimer =({initialTime ,winner, gameOver, hasStarted})=>{
const [timeLeft, setTimeLeft] = useState(initialTime)

  useEffect(() => {
    
    if (timeLeft <= 0 || winner || gameOver || !hasStarted) return;
    
    const timer = setInterval(() => {
      setTimeLeft( (prev) => {
        if(prev<=1) {
          clearInterval(timer)
          return 0
        }
        return prev -1
      } )
    }, 1000);
return () => clearInterval(timer);
    
  }, [initialTime, winner, gameOver, hasStarted]);

return {timeLeft, setTimeLeft}

}
