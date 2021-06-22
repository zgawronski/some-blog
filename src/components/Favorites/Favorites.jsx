/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
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

const Tab = JSON.parse(localStorage.getItem('names'));

const Favorites = () => {
  const { status, posts } = usePosts();

  const inputHandler = (e) => {
    const text = e.target.value;
    setInputText(text);
  };



  return (
    <HeadWrapper>
      <HeaderDiv>
        <Input search placeholder='search' onChange={inputHandler} />
        <h2>Some Blog </h2>
        <p>You can view {Tab != null ? Tab.length : 0} posts</p>
      </HeaderDiv>
      <BlogDiv>
        {status === 'loading' ? (
          <progress size={120} />
        ) : (
          posts
            .filter((tabelka) => {
              const tab = [];
              if(Tab != null){
              Tab.forEach((x) => {
                if (tabelka.id === x) {
                  // console.log(post);
                  tab.push(tabelka);

                }
              });
            }else{
                return 0;
              }
              if (tab.length > 0) {
                return tab
              }
            })
            .map((post) => {
              // console.log(post);
              const postKey = `key:${post.id}`;
              return (
                <Cards key={postKey} id={post.id} title={post.title} description={post.body} />
              );
            })
        )}
      </BlogDiv>
    </HeadWrapper>
  );
};

export default Favorites;
