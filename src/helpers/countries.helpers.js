export const filteredCountries = (countries, searchTerm) => {
    if (!countries || searchTerm === '') return countries || [];
  
    return countries.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

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