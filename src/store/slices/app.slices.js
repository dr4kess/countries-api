import { createSlice } from '@reduxjs/toolkit';
import { countriesExtraReducer } from '../thunks/countries.thunk';

const initialState = {
  isLoading: false,
  isMobile: null,
  isError: false,
  countries: null,
  searchTerm: '',
  isSearching: false
};

export const appSlices = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setisLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setIsMobile: (state, { payload }) => {
      state.isMobile = payload;
    },
    setisError: (state, { payload }) => {
      state.isError = payload;
    },
    setCountries: (state, { payload }) => {
      state.isLoading = payload;
    },
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
    setIsSearching: (state, { payload }) => {
      state.isSearching = payload;
    },
  },
  extraReducers: countriesExtraReducer,
});

// ACTIONS
export const {
  setisLoading,
  setIsMobile,
  setIsError,
  setCountries,
  setSearchTerm,
  setIsSearching
} = appSlices.actions;

// SELECTORS
export const selectIsLoading = (state) => state.app.isLoading;
export const selectCountries = (state) => state.app.countries;
export const selectIsMobile = (state) => state.app.isMobile;
export const selectIsError = (state) => state.app.error;
export const selectSearchTerm = (state) => state.app.searchTerm;
export const selectIsSearching = (state) => state.app.isSearching;

export default appSlices.reducer;
