import { CountryResponseProps } from "../services/countries";
import getRandomCountry from "../services/getRandomCountry";

export enum GameActionsKind {
  CORRECT_ANSWER = "CORRECT_ANSWER",
  INCORRECT_ANSWER = "INCORRECT_ANSWER",
  RESET_GAME = "RESET_GAME",
}

type GameActions = {
  type: GameActionsKind;
  payload?: any;
};

export type GameState = {
  firstCountry: CountryResponseProps;
  secondCountry: CountryResponseProps;
  gameOver: boolean;
  // lastCountry: CountryResponseProps,
  currentScore: number;
  maxScore: number;
  question: string;
};

export default function GameReducer(state: GameState, action: GameActions) {
  switch (action.type) {
    case GameActionsKind.CORRECT_ANSWER: {
      return {
        ...state,
        firstCountry: state.secondCountry,
        secondCountry: getRandomCountry(),
        currentScore: state.currentScore++,
      };
    }
    case GameActionsKind.INCORRECT_ANSWER: {
      return { 
        ...state,
        gameOver: true,
        maxScore: state.currentScore > state.maxScore? state.currentScore: state.maxScore, 
        currentScore: 0,
    };
    }
    // initialState is the same as the declared outside 
    case GameActionsKind.RESET_GAME: {
      return {
        ...state,
        firstCountry: getRandomCountry(),
        secondCountry: getRandomCountry(),
        gameOver: false
      }
    }
  }
}

