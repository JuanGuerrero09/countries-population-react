import { useReducer, useRef, useState, useContext } from "react";
import { getRandomElement } from "../services/getRandomElement";
import getRandomCountry from "../services/getRandomCountry";
type CountryInfo = any;

// Deprecated

// export default async function useCountries(){
//   const allCountries = await getCountries();
//   const randomCountry = await getRandomElement(allCountries)
//   return await randomCountry
// }

const initialCountryOne = getRandomCountry();
const initialCountryTwo = getRandomCountry();


export function useGame() {
  // const lastCountry = useRef(secondCountry);

  const [firstCountry, setFirstCountry] =
    useState<CountryInfo>(initialCountryOne);
  const [secondCountry, setSecondCountry] =
    useState<CountryInfo>(initialCountryTwo);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  const possibleQuestions = ["area", "population"];
  const [question, setQuestion] = useState<string>(
    getRandomElement(possibleQuestions)
  );

  
  const handleQuestion = (event: React.MouseEvent<HTMLButtonElement>) => {
    const answer = (event.target as HTMLButtonElement).value;
    const isAnswerCorrect =
      (firstCountry[question] >= secondCountry[question] &&
        answer === "less") ||
      (firstCountry[question] <= secondCountry[question] && answer === "more");
    if (isAnswerCorrect) {
      const newQuestion = getRandomElement(possibleQuestions);
      setQuestion(newQuestion);
      const newCountry = getRandomCountry();
      setCurrentScore(currentScore + 1);
      setFirstCountry(secondCountry);
      setSecondCountry(newCountry);
    }
    if (!isAnswerCorrect) {
      setGameOver(true);
    }
  };

  const handleRestart = () => {
    if (maxScore < currentScore) {
      setMaxScore(currentScore);
    }
    const newCountryOne = getRandomCountry();
    const newCountryTwo = getRandomCountry();
    const newQuestion = getRandomElement(possibleQuestions);
    setQuestion(newQuestion);
    setFirstCountry(newCountryOne);
    setSecondCountry(newCountryTwo);
    setCurrentScore(0);
    setGameOver(false);
  };

  return {
    firstCountry,
    secondCountry,
    question,
    currentScore,
    maxScore,
    handleQuestion,
    handleRestart,
    gameOver,
  };
}
