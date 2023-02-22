import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'

export default function Scores() {
  const { currentScore, maxScore } = useContext(GameContext)
  return (
    <>
    <div className="scores flex flex-col md:flex-row font-semibold w-screen md:justify-evenly text-xl">

      <h2 className='text-red-600'>Actual score: {currentScore}</h2>
      <h2 className='text-blue-600'>Max score {maxScore}</h2>
    </div>
    </>
  )
}
