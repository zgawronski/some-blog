/* eslint-disable no-unused-vars */
import * as actionTypes from 'actions/actionTypes/userTypes';

const defaultState = () => ({
  usersList: [],
  usersComment: [],
  usersPost: [],
});

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = defaultState(), action) => {
  switch (action.type) {
    case 'GET_USERS': {
      const data = action;
      return {
        ...state,
        usersList: data.payload,
      };
    }
    case 'GET_COMMENTS': {
      const data = action;
      return {
        ...state,
        usersComment: data.payload,
      };
    }
    case 'GET_POSTS': {
      const data = action;
      return {
        ...state,
        usersPost: data.payload,
      };
    }
    default: {
      return state;
    }
  }
};
