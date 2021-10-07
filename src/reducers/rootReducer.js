import postsReducer from 'redux/postsSlice';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  posts: postsReducer,
});
