import React from "react";
import { getCountries } from "../services/countries";

// inicie con 3 countries
// si la respuesta es correcta trae una nueva y mueve las que están

const allCountries = await getCountries();
export default async function useCountries() {
  return <div>useCountries</div>;
}
