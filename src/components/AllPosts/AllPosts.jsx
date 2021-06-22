import React from 'react';
import Post from 'components/AllPosts/Post';
import styled from 'styled-components';
import Colors from 'styledHelpers/Colors';
import Input from 'styledHelpers/Input';

import usePosts from 'components/Cards/usePosts';

const HeadWrapper2 = styled.div`
  margin-top: 50px;
`;
const BlogDiv2 = styled.div`
  padding: 25px;
  div {
    margin-bottom: 20px;
  }
`;

const HeaderDiv2 = styled.div`
  h2 {
    margin: 25px 0 0 0;
    color: ${Colors.primary};
  }
  p {
    color: ${Colors.primary};
    margin: 0;
  }
`;

const AllPosts = () => {
  const { status, posts } = usePosts();
  return (
    <HeadWrapper2>
      <HeaderDiv2>
        <Input search placeholder='search' />
        <h2>Some Blog </h2>
        <p>You can view {posts.length} posts, and thats all what we have ;-)</p>
      </HeaderDiv2>
      <BlogDiv2>
        <div>
          {status === 'loading' ? (
            <progress size={120} />
          ) : (
            posts.map((post) => {
              const postKey = `key:${post.id}`;
              return <Post key={postKey} title={post.title.slice(0, 15)} description={post.body} />;
            })
          )}
        </div>
      </BlogDiv2>
    </HeadWrapper2>
  );
};

export default AllPosts;
