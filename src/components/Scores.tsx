import { useColorMode } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'

export default function Scores() {
  const { currentScore, maxScore } = useContext(GameContext)
  const { colorMode } = useColorMode()
  const colorWeight = colorMode == 'light'? '600' : '500'
  return (
    <div className="scores flex md:flex-row font-semibold w-screen justify-evenly text-2xl">
      <h2 className={`text-red-${colorWeight}`}>Actual Score: {currentScore}</h2>
      <h2 className={`text-blue-${colorWeight}`}>Max Score: {maxScore}</h2>
    </div>
  )
}
