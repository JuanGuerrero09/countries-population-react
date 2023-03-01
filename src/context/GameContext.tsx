import React, { createContext, useReducer } from "react";
import GameReducer, { GameState } from "./GameReducer";
import { GameActionsKind } from "./GameReducer";
import getRandomCountry from "../services/getRandomCountry";

type Props = {
  children: React.ReactNode;
};

const initialState: GameState = {
  firstCountry: getRandomCountry(),
  secondCountry: getRandomCountry(),
  currentScore: 0,
  maxScore: 0,
  gameOver: false,
  question: "area",
};

export const GameContext = createContext(null as any);

export function GameProvider({ children }: Props) {
  const [state, dispatch] = useReducer(GameReducer, initialState)

  function correctAnswerSelected({
    firstCountry,
    secondCountry,
    currentScore,
    question,
  }: GameState) {
    dispatch({
      type: GameActionsKind.CORRECT_ANSWER,
      payload: { firstCountry, secondCountry, currentScore, question },
    });
  }

  function wrongAnswerSelected({gameOver, currentScore, maxScore}:GameState){
    dispatch({
      type: GameActionsKind.INCORRECT_ANSWER,
      payload: {gameOver, currentScore, maxScore}
    })
  }

  function resetGame(){
    dispatch({
      type: GameActionsKind.RESET_GAME
    })
  }

  const {firstCountry, secondCountry, currentScore, gameOver, maxScore, question} = state

  return (
    <GameContext.Provider
      value={{ firstCountry, secondCountry, currentScore, maxScore, question, correctAnswerSelected, wrongAnswerSelected, resetGame, gameOver }}
    >
      {children}
    </GameContext.Provider>
  );
}
