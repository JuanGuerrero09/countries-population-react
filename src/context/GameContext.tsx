import React, { createContext, useState } from "react";
import { useGame } from "../hooks/useGame";

type Props = {
  children: React.ReactNode;
};

export const GameContext = createContext(null as any);



export function GameProvider({ children }: Props) {
  const { firstCountry, secondCountry, setCurrentScore, question, handleQuestion, handleRestart, gameOver } = useGame();
  return (
    <GameContext.Provider
      value={{ firstCountry, secondCountry, setCurrentScore, question, handleQuestion, handleRestart, gameOver }}
    >
      {children}
    </GameContext.Provider>
  );
}
