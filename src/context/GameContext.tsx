import React, { createContext, useState } from "react";
import { useGame } from "../hooks/useGame";

type Props = {
  children: React.ReactNode;
};

export const GameContext = createContext(null as any);



export function GameProvider({ children }: Props) {
  const { firstCountry, secondCountry, setRoundCounter, question, handleQuestion } = useGame();
  return (
    <GameContext.Provider
      value={{ firstCountry, secondCountry, setRoundCounter, question, handleQuestion }}
    >
      {children}
    </GameContext.Provider>
  );
}
