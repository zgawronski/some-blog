import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPostsListThunk } from 'redux/postsSlice';

const usePosts = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.posts.status);
  const posts = useSelector((state) => state.posts.list);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getPostsListThunk());
    }
  }, [status, dispatch]);

  return {
    status,
    posts,
  };
};

export default usePosts;
