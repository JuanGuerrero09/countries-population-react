import React, { useCallback, useEffect, useRef, useState } from "react";
import { getCountries } from "./countries";
import { getRandomElement } from "./getRandomElement";

// inicie con 3 countries
// si la respuesta es correcta trae una nueva y mueve las que están

const allCountries = await getCountries();

export default function getRandomCountry() {
  const country = getRandomElement(allCountries);
  return country;
}
