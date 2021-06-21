/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled, { css } from 'styled-components';
import ButtonIcon from 'styledHelpers/ButtonIcon';
import { Wrapper } from 'styledHelpers/Components';
import Colors from 'styledHelpers/Colors';

const StyledWrapper = styled(Wrapper)`
  width: 100%;
  min-height: 30vh;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  margin-bottom: 5vh;
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

const Card = (props) => (
  <StyledWrapper>
    <InnerWrapper activeColor>
      <h2>{props.title}</h2>
      <DateInfo>date</DateInfo>
      <ButtonIcon className='favButton' />
    </InnerWrapper>
    <InnerWrapper flex>
      <p>{props.description}</p>
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;
