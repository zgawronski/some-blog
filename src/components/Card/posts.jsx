import React from 'react';
import usePosts from 'components/Card/usePosts';


export const Title = () => {
  const { status, posts } = usePosts();

  return (
    <div>
      {status === 'loading' ? (
        <progress size={120} />
        ) : (
          posts.map((post) => {
            console.log(post);
            const postKey = `key:${post.id}`;
            return <div key={postKey} title={post.title} />;
          })
          )}
    </div>
  );
};

export const Posts = () => {
  const { status, posts } = usePosts();

  return (
    <div>
      {status === 'loading' ? (
        <progress size={120} />
      ) : (
        posts.map((post) => {
          const postKey = `key:${post.id}`;
          return <div key={postKey} description={post.body} />;
        })
      )}
    </div>
  );
};


