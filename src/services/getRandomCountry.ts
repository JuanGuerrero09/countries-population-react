import { CountryResponseProps, getCountries } from "./countries";
import { getRandomElement } from "./getRandomElement";

const allCountries = await getCountries();

export default function getRandomCountry() {
  const country:CountryResponseProps = getRandomElement(allCountries);
  return country;
}
