import React, { useContext } from "react";
import Card from "./Card";
import { GameContext } from "../context/GameContext";


export default function Main() {
  const {firstCountry, secondCountry} = useContext(GameContext)
  return (
    <main className="p-2 w-full flex flex-col items-center md:justify-evenly lg:flex-row lg:h-2/3">
      <Card type="one" country={firstCountry}></Card>
      <Card type="two" country={secondCountry}></Card>
    </main>
  );
}
