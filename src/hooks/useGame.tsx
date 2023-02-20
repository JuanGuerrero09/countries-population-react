import CountryTwoData from "../mocks/countryOne.json";
import CountryOneData from "../mocks/countryTwo.json";
import { useState } from "react";

type CountryInfo = any

export function useGame() {
    const [firstCountry, setFirstCountry] = useState<CountryInfo>(CountryOneData);
    const [secondCountry, setSecondCountry] = useState<CountryInfo>(CountryTwoData);
    const [roundCounter, setRoundCounter] = useState(0);

    const possibleQuestions = ['area', 'population']
    let questionTextIndex = Math.round(Math.random() * (possibleQuestions.length - 1))
    const question = possibleQuestions[questionTextIndex]


    const handleQuestion = (event:React.MouseEvent<HTMLButtonElement>) => {
      const answer = (event.target as HTMLButtonElement).value
      const isAnswerCorrect = (firstCountry[question] >= secondCountry[question] && answer === 'less') || (firstCountry[question] <= secondCountry[question] && answer === 'more')
      if (isAnswerCorrect){
        console.log('won')
      }
    }
  
    return { firstCountry, secondCountry, question, setRoundCounter, handleQuestion };
  }