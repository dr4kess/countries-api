export const filteredCountries = (countries, searchTerm) => {
  if (!countries || searchTerm === '') return countries || [];

  const searchTermNormalized = searchTerm.toLowerCase();

  const startsWithMatches = [];
  const containsMatches = [];

  countries.forEach(country => {
    const countryNameNormalized = country.name.common.toLowerCase();

    if (countryNameNormalized.startsWith(searchTermNormalized)) {
      startsWithMatches.push(country);
    } else if (countryNameNormalized.includes(searchTermNormalized)) {
      containsMatches.push(country);
    }
  });

  return [...startsWithMatches, ...containsMatches];
}

export const formatCurrencies = (currencies) => {
    return Object.entries(currencies).map(([code, { name, symbol }]) => {
        return `${name} (${code}) - Symbol: ${symbol}`;
    }).join(', ');
};

export const toggleDetail = (detail) => {
  setDetailsVisibility(prevState => ({
      ...prevState,
      [detail]: !prevState[detail]
  }));
};