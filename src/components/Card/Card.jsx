/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
import Button from 'styledHelpers/Button';
import ButtonIcon from 'styledHelpers/ButtonIcon';
import { Wrapper } from 'styledHelpers/Components';
import Colors from 'styledHelpers/Colors';

const StyledWrapper = styled(Wrapper)`
  width: 380px;
  min-height: 30vh;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;
const InnerWrapper = styled.div`
  padding: 17px 30px;
  background-color: ${({ activeColor }) => (activeColor ? Colors.primary : Colors.white)};
  h2 {
    margin: 0;
  }
  p {
    margin: 0;
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

const Card = (title, description) => (
  <StyledWrapper>
    <InnerWrapper activeColor>
      <h2>{title}</h2>
      <DateInfo>date</DateInfo>
      <ButtonIcon className='favButton' />
    </InnerWrapper>
    <InnerWrapper flex>
      <p>{description}</p>
      <Button secondary>remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);
export default Card;
