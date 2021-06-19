// import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import postsReducer from 'Api/postSlice';
import usersReducer from 'Api/usersSlice';
// eslint-disable-next-line import/no-unresolved
// import reducers from 'reducers';

// const store = createStore(reducers, applyMiddleware(thunk));

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
