/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
import React from 'react';

import Cards from 'components/Cards/Cards';
import Input from 'styledHelpers/Input';
import { HeadWrapper, BlogDiv, HeaderDiv} from 'styledHelpers/Components';

import usePosts from 'components/Cards/usePosts';


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
