import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../../api/api';
import { setIsError } from '../slices/app.slices';

export const getCountriesThunk = createAsyncThunk(
  'countries/getCountriesThunk',
  async function (_, { dispatch }) {
    try {
      const response = await axios.get(`${URL}`);
      return response;
    } catch (error) {
      console.log(error.message);
      dispatch(setIsError(true));
    }
  },
);

export const countriesExtraReducer = (builder) => {
  builder
    .addCase(getCountriesThunk.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getCountriesThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.countries = payload.data;
    })
    .addCase(getCountriesThunk.rejected, (state, { error }) => {
      state.isLoading = false;
      state.isError = error.message;
    });
};
