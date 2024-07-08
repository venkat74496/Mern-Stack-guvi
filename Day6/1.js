// Fetch data from REST Countries API
async function fetchCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();
    return countries;
}

// 1. Get all the countries from Asia continent/region using Filter method
function getAsianCountries(countries) {
    return countries.filter(country => country.region === 'Asia');
}

// 2. Get all the countries with a population of less than 2 lakhs using Filter method
function getSmallPopulationCountries(countries) {
    return countries.filter(country => country.population < 200000);
}

// 3. Print the following details name, capital, flag, using forEach method
function printCountryDetails(countries) {
    countries.forEach(country => {
        const name = country.name.common;
        const capital = country.capital ? country.capital[0] : 'N/A';
        const flag = country.flags ? country.flags[0] : 'N/A';
        console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
    });
}

// 4. Print the total population of countries using reduce method
function getTotalPopulation(countries) {
    return countries.reduce((total, country) => total + country.population, 0);
}

// 5. Print the country that uses US dollars as currency
function getCountriesUsingUSD(countries) {
    return countries.filter(country => country.currencies && Object.keys(country.currencies).includes('USD'));
}

// Main function to execute all tasks
async function main() {
    const countries = await fetchCountries();

    const asianCountries = getAsianCountries(countries);
    console.log('Asian Countries:', asianCountries);

    const smallPopulationCountries = getSmallPopulationCountries(countries);
    console.log('Countries with population less than 2 lakhs:', smallPopulationCountries);

    console.log('Country details:');
    printCountryDetails(countries);

    const totalPopulation = getTotalPopulation(countries);
    console.log('Total Population:', totalPopulation);

    const usdCountries = getCountriesUsingUSD(countries);
    console.log('Countries using USD as currency:', usdCountries);
}

main().catch(error => console.error('Error:', error));

