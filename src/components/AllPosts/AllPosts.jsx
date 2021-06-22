import React from 'react';
import Cards from 'components/Cards/Cards';
import styled from 'styled-components';
import Colors from 'styledHelpers/Colors';
import Input from 'styledHelpers/Input';

import usePosts from 'components/Cards/usePosts';

const HeadWrapper = styled.div`
  margin-top: 50px;
`;
const BlogDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
  padding: 25px 150px 25px 70px;
`;

const HeaderDiv = styled.div`
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
    <HeadWrapper>
      <HeaderDiv>
        <Input search placeholder='search' />
        <h2>Some Blog </h2>
        <p>You can view {posts.length} posts, and thats all what we have ;-)</p>
      </HeaderDiv>
      <BlogDiv>
        {status === 'loading' ? (
          <progress size={120} />
        ) : (
          posts.map((post) => {
            const postKey = `key:${post.id}`;
            return <Cards key={postKey} title={post.title.slice(0, 15)} description={post.body} />;
          })
        )}
      </BlogDiv>
    </HeadWrapper>
  );
};

export default AllPosts;