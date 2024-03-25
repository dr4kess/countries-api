import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSearching: false,
  filteredCountries: null,
  searchTerm: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setIsSearching: (state, action) => {
      state.isSearching = action.payload;
      console.log(action.payload, 'action.payload')
    },
    setFilteredCountries: (state, action) => {
      state.filteredCountries = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  },
});

export const {setFilteredCountries, setIsSearching, setSearchTerm} = searchSlice.actions;

export const selectFilteredCountries = (state) => state.search.filteredCountries;
export const selectIsSearching = (state) => state.search.isSearching;
export const selectSearchTerm = (state) => state.search.searchTerm;


export default searchSlice.reducer;