import * as actionTypes from 'Api/userTypes';

const defaultState = () => ({
  usersList: [],
  usersComment: [],
  usersPost: [],
});

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = defaultState(), action) => {
  switch (action.type) {
    case actionTypes.GET_USERS: {
      const data = action;
      return {
        ...state,
        usersList: data.usersList,
      };
    }
    case actionTypes.GET_COMMENTS: {
      const data = action;
      return {
        ...state,
        usersComment: data.usersComment,
      };
    }
    case actionTypes.GET_POSTS: {
      const data = action;
      return {
        ...state,
        usersPost: data.usersPost,
      };
    }
    default: {
      return state;
    }
  }
};
