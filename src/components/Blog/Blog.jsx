import React from 'react';

import Cards from 'components/Cards/Cards';
import Input from 'styledHelpers/Input';
import { HeadWrapper, BlogDiv, HeaderDiv} from 'styledHelpers/Components';

import usePosts from 'components/Cards/usePosts';


const Blog = () => {
  const { status, posts } = usePosts();
  return (
    <HeadWrapper>
      <HeaderDiv>
        <Input search placeholder='search' />
        <h2>Some Blog </h2>
        <p>You can view 9 posts</p>
      </HeaderDiv>
      <BlogDiv>
        {status === 'loading' ? (
          <progress size={120} />
        ) : (
          posts
            .map((post) => {
              const postKey = `key:${post.id}`;
              return (
                <Cards key={postKey} id={post.id} title={post.title} description={post.body} />
              );
            })
            .slice(0, 9)
        )}
      </BlogDiv>
    </HeadWrapper>
  );
};

export default Blog;
