import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';


import Post from 'components/AllPosts/Post';
import Input from 'styledHelpers/Input';
import Colors from 'styledHelpers/Colors'
import styled from 'styled-components';
import { HeadWrapper, HeaderDiv} from 'styledHelpers/Components';

import usePosts from 'components/Cards/usePosts';


const BlogDiv2 = styled.div`
  padding: 10px;
  div {
    margin-bottom: 20px;
  }
  .pagination {
    display: flex;
    position: relative;
    justify-content: center;
    color: ${Colors.primary};
    cursor: pointer;
    margin-top: 0;
    background-color: ${Colors.white};
    list-style-type: none;
    .active {
        color: ${Colors.black};
        padding: 5px;
    }
    .break-me{
        padding: 5px;
    }
    .page{
        padding: 5px;
    }
    .next{
        padding: 5px;
    }
    .previous{
        padding: 5px;
    }
}
`;

const AllPosts = () => {
  const { status, posts } = usePosts();

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    const {selected} = data;
    setCurrentPage(selected);
}

const currentPosts = posts.slice(currentPage, currentPage + 3);
  return (
    <HeadWrapper>
      <HeaderDiv>
        <Input search placeholder='search' />
        <h2>Some Blog </h2>
        <p>You can view {posts.length} posts, and thats all what we have ;-)</p>
      </HeaderDiv>
      <BlogDiv2>
          <ReactPaginate
                    previousLabel="PREVIOUS"
                    nextLabel="NEXT"
                    breakLabel="..."
                    breakClassName="break-me"
                    pageCount={posts.length}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName="pagination"
                    activeClassName="active"
                    pageClassName="page"
                    previousClassName="previous"
                    nextClassName="next"
                />
        <div>
          {status === 'loading' ? (
            <progress size={120} />
          ) : (
            currentPosts.map((post) => {
              const postKey = `key:${post.id}`;
              return (
                <Post
                  key={postKey}
                  id={post.id}
                  title={post.title.slice(0, 15)}
                  description={post.body}
                />
              );
            })
          )}
        </div>
      </BlogDiv2>
    </HeadWrapper>
  );
};

export default AllPosts;
