/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from 'styledHelpers/ButtonIcon';
import { Wrapper } from 'styledHelpers/Components';
import Colors from 'styledHelpers/Colors';

const StyledWrapper = styled(Wrapper)`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;
const InnerWrapper = styled.div`
  padding: 17px 30px;
  background-color: ${({ activeColor }) => (activeColor ? Colors.primary : Colors.white)};
  h2 {
    margin: 0;
  }
  p {
    margin: 0;
    color: ${Colors.primary};
  }
  .favButton2 {
    position: absolute;
    right: 5%;
    top: 10%;
    width: 30px;
    height: 30px;
    background-size: 20px;
    background-position: 50%;
    border-radius: 5px;
  }
`;

const Post = (props) => (
  <StyledWrapper id={props.id}>
    <InnerWrapper activeColor>
      <h2>{props.title}</h2>
      <ButtonIcon className='favButton2' />
    </InnerWrapper>
    <InnerWrapper flex>
      <p>{props.description}</p>
    </InnerWrapper>
  </StyledWrapper>
);

export default Post;
