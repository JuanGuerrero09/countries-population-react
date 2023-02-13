import React from "react";
import CardOne from "./Cards/CardOne";
import Card from "./Card";
import countryOne from "../mocks/countryOne.json";
import countryTwo from "../mocks/countryTwo.json";

export default function Main() {
  return (
    <main className="p-2 w-full flex flex-col items-center lg:flex-row md:justify-evenly">
      <Card type="one" country={countryOne}></Card>
      <Card type="two" country={countryTwo}></Card>
    </main>
  );
}
