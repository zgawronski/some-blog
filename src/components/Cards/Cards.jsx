/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-sequences */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from 'styledHelpers/Button';
import ButtonIcon from 'styledHelpers/ButtonIcon';
import { Wrapper } from 'styledHelpers/Components';
import Colors from 'styledHelpers/Colors';

const StyledWrapper = styled(Wrapper)`

  min-height: 30vh;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  margin-bottom: 5vh;

  ${({smaller}) =>
    smaller &&
      css`
        width: 380px;
        `}
  ${({bigger}) =>
    bigger &&
      css`
        width: 900px;
        `}
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
  .favButton {
    position: absolute;
    right: 5%;
    top: 10%;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled.p``;





const Cards = (props) => {

  const [xl, setXl] = useState(false);
  // const [smaller, setSmaller]=useState(true);

  function changeSize() {
    if (!xl)
    {
      setXl(true);

    }else{
      setXl(false)

    }
  }

  const date = getDate()

  return(
    <StyledWrapper id={props.id} bigger={xl} smaller={!xl}>
      <InnerWrapper activeColor>
        <h2>{props.title}...</h2>
        <DateInfo>date</DateInfo>
        <ButtonIcon className='favButton' />
      </InnerWrapper>
      <InnerWrapper flex>
        <p>{props.description}</p>

          <Button onClick={() => changeSize()} secondary>
            Read more...
          </Button>

      </InnerWrapper>
    </StyledWrapper>
  );
}

export default Cards;
