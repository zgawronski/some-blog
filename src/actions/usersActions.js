/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import { Dispatch } from 'react';
import * as actionTypes from 'actions/actionTypes/userTypes';

export function getUsers() {
  return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((usersList) => {
        dispatch({
          type: 'GET_USERS',
          payload: usersList,
        });
      });
  };
}

export function getComments() {
  return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((comentsList) => {
        dispatch({
          type: 'GET_COMMENTS',
          payload: comentsList,
        });
      });
  };
}

export function getPosts() {
  return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((usersPost) => {
        dispatch({
          type: 'GET_POSTS',
          payload: usersPost,
        });
      });
  };
}
