/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from 'styledHelpers/ButtonIcon';
import { Wrapper } from 'styledHelpers/Components';
import Colors from 'styledHelpers/Colors';
import fontSize from 'styledHelpers/FontSize'
import { warehouse } from 'tools/warehouse';

const StyledWrapper = styled(Wrapper)`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;
const InnerWrapper = styled.div`
  padding: 15px 15px;
  background-color: ${({ activeColor }) => (activeColor ? Colors.primary : Colors.white)};
  margin-bottom: 0;
  h4 {
    margin: 0;
  }
  p {
    margin: 0;
    color: ${Colors.primary};
    font-size: ${fontSize[14]};
  }
  .favButton2 {
    position: absolute;
    right: 5%;
    top: 10%;
    width: 50px;
    height: 50px;
    background-size: 20px;
    background-position: 50%;
    border-radius: 5px;
  }
`;

const Post = (props) => {
  const x = props.id;

  function favPost() {
    warehouse.push(x);
    localStorage.setItem('names', JSON.stringify(warehouse));
    // @ts-ignore: Object is possibly 'null'.
    const tmp = JSON.parse(localStorage.getItem('names'));
    localStorage.setItem('names', JSON.stringify(tmp));
    tmp.push(x);
  }

  return (
    <StyledWrapper id={props.id}>
      <InnerWrapper activeColor>
        <h4>{props.id}) {props.title}</h4>
        <ButtonIcon onClick={() => favPost()} className='favButton2' />
      </InnerWrapper>
      <InnerWrapper flex>
        <p>{props.description}</p>
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default Post;
