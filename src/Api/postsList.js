// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// omit other imports
import { selectAllPosts, fetchPosts } from 'Api/postSlice';

const PostsList = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const posts = useSelector(selectAllPosts);

  const postStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  // omit rendering logic
};

export default PostsList;
