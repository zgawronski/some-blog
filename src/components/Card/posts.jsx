import React from 'react';
import usePosts from 'components/Card/usePosts';
import Card from 'components/Card/Card';

const Posts = () => {
  const { status, posts } = usePosts();

  return (
    <div>
      {status === 'loading' ? (
        <progress size={120} />
      ) : (
        posts.map((post) => {
          const postKey = `key:${post.id}`;
          return <Card description={post.body} key={postKey} title={post.title} />;
        })
      )}
    </div>
  );
};

export default Posts;
