import React, { createContext, useState } from "react";
import CountryOneData from '../mocks/countryOne.json'
import CountryTwoData from '../mocks/countryTwo.json'

type Props = {
    children: React.ReactNode;
  }

const GameContext = createContext(null as any);


export function GameProvider({ children }:Props) {

    const [firstCountryValue, setFirstCountryValue] = useState(CountryOneData.population)
    const [secondCountryValue, setSecondCountryValue] = useState(CountryTwoData.population)

  return <GameContext.Provider value={{}}>
    {children}
    </GameContext.Provider>;
}
