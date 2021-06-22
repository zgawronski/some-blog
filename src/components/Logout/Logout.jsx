
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from 'styledHelpers/Button';
import { Wrapper } from 'styledHelpers/Components';
import Colors from 'styledHelpers/Colors';

const StyledWrapper = styled(Wrapper)`
    width: 25vw;
    height: 35vh;
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





const Logout = () => (
    <StyledWrapper >
      <InnerWrapper activeColor>
        <h2>Przyjacielu zawróć</h2>
        <DateInfo>date</DateInfo>
      </InnerWrapper>
      <InnerWrapper flex>
        <p>Ogarnął mnie smutek, że odchodzisz...</p>
        <Link to='/'>
          <Button secondary>
            Go Back!!!
          </Button>
        </Link>
      </InnerWrapper>
    </StyledWrapper>
  )

export default Logout;
