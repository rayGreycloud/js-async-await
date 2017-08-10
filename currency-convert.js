// Convert currency
// Provide currency to convert,
// currency to convert to,
// amount to convert
const axios = require('axios');

const getExchangeRate = async (from, to) => {
  try {
    const response = await axios.get(`http://api.fixer.io/latest?base=${from}`);

    return response.data.rates[to];
  } catch(e) {
    throw new Error(`Unable to find the exchange rate for ${from} to ${to}`);
  }
};

const getCountries = async (currencyCode) => {
  try {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);

    return response.data.map((country) => country.name);
  } catch(e) {
    throw new Error(`Unable to find any countries that use currency code: ${currencyCode}.`);
  }
};

const convertCurrency = (from, to, amount) => {
  let countries;
  return getCountries(to).then((tempCountries) => {
    countries = tempCountries;
    return getExchangeRate(from, to);
  }).then((rate) => {
    const exchangedAmount = amount * rate;

    return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
  });
};

// Refactor using async/await
const convertCurrencyAlt = async (from, to, amount) => {
  const rate = await getExchangeRate(from, to);
  const countries = await getCountries(to);
  const exchangedAmount = amount * rate;

  return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
};

convertCurrencyAlt('USD', 'EUR', 100).then((status) => {
  console.log(status);
}).catch((e) => {
  console.log(e.message);
});

// getExchangeRate('USD', 'EUR').then((rate) => {
//   console.log(rate);
// });
// getCountries('EUR').then((countries) => {
//   console.log(countries);
// });
