const COUNTRY_ROUTES = 'https://restcountries.com/v3.1/all'

export type CountryResponseProps = {
    name: string,
    population: number,
    area: number,
    flag: {
        src: string,
        alt: string
    }
}

export async function getCountries () {
    const allCountries:CountryResponseProps[] = []
    try {
        const response = await fetch(COUNTRY_ROUTES)
        const responseData = await response.json()
        await responseData.map((country:any):any => {
            const newCountry:CountryResponseProps = {
                name: country.name.common,
                area: country.area,
                population: country.population,
                flag: {
                    src: country.flags.svg,
                    alt: country.flags.alt
                }
            }
            allCountries.push(newCountry)
        })
        return allCountries
    } catch (e) {
        throw new Error('Error getting countries')
}}