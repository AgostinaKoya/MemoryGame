import "./App.css";
import beeImg from "../public/images/cards/animals/bee.png";
import { CARDS } from "./constants/cardData";
import { useState } from "react";
import { Game } from "./components/Game/Game";

function App() {
 

  return (
    <main>
      <Game/>
    </main>
  );
}

export default App;
