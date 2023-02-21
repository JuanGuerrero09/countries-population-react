import React, { useCallback, useEffect, useRef, useState } from "react";
import { getCountries } from "../services/countries";
import { getRandomElement } from "../services/getRandomElement";


// inicie con 3 countries
// si la respuesta es correcta trae una nueva y mueve las que están

const allCountries = await getCountries();

export default function getRandomCountry() {
  const country = getRandomElement(allCountries)
  return country
}
