import { useState, useEffect } from "react";

export const useWinner = ({matched, cards})=>{
const [winner,setWinner] = useState(false)


  useEffect(() => {
    if (matched.length === cards.length / 2) {
      console.log("🏆 ¡Ganaste!");
      setWinner(true);
    }

  }, [matched, cards]);

return {winner , setWinner}
}