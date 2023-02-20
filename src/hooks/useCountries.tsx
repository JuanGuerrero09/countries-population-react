import React from "react";
import { getCountries } from "../services/countries";

const allCountries = await getCountries();
export default async function useCountries() {
  return <div>useCountries</div>;
}
