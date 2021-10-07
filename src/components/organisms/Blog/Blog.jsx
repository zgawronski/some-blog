import React, { useState } from 'react';

import Cards from 'components/molecules/Cards/Cards';
import Input from 'components/atoms/Input/Input';
import { HeadWrapper, BlogDiv, HeaderDiv } from 'assets/styles/Components';

import usePosts from 'hooks/usePosts.js/usePosts';

const Blog = () => {
  const { status, posts } = usePosts();

  const [inputText, setInputText] = useState('');

  const inputHandler = (e) => {
    const text = e.target.value;
    setInputText(text);
  };
  return (
    <HeadWrapper>
      <HeaderDiv>
        <Input search placeholder='search' onChange={inputHandler} />
        <h2>Some Blog </h2>
        <p>You can view 9 posts</p>
      </HeaderDiv>
      <BlogDiv>
        {status === 'loading' ? (
          <progress size={120} />
        ) : (
          posts
            .filter((post) => {
              if (post.title.toLowerCase().includes(inputText.toLowerCase())) {
                return post;
              }
              return null;
            })
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
