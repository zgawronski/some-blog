import { createSlice } from '@reduxjs/toolkit';
import useApiClient from 'hooks/useApiClient/useApiClient';

import initialState from 'redux/initialState';

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsList(state) {
      state.status = 'loading';
    },
    fetchPostsList(state, action) {
      state.status = 'succesful';
      state.list = action.payload;
    },
    errorPostsList(state, action) {
      state.status = 'failed';
      state.list = [];
      state.error = action.payload;
    },
  },
});

export const { getPostsList, fetchPostsList, errorPostsList } = postsSlice.actions;

export const getPostsListThunk = () => async (dispatch) => {
  dispatch(getPostsList());
  const { get } = useApiClient();

  try {
    const posts = await get('/posts');
    dispatch(fetchPostsList(posts));
  } catch (error) {
    dispatch(errorPostsList(error));
  }
};

export default postsSlice.reducer;
