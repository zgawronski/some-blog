/* eslint-disable import/no-unresolved */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.users;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => action.payload,
  },
});

export default usersSlice.reducer;
