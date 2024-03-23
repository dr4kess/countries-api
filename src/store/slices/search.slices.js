import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSearching: false,
  filteredCountries: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setIsSearching: (state, action) => {
      state.isSearching = action.payload;
    },
    setFilteredCountries: (state, action) => {
      state.filteredCountries = action.payload;
    }
  },
});

export const {setFilteredCountries, setIsSearching } = searchSlice.actions;

export const selectFilteredCountries = (state) => state.app.filteredCountries;
export const selectIsSearching = (state) => state.app.isSearching;


export default searchSlice.reducer;