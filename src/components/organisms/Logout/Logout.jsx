import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import { StyledWrapper, InnerWrapper, DateInfo } from './Logout.styles';

const Logout = () => (
  <StyledWrapper>
    <InnerWrapper activeColor>
      <h2>Przyjacielu zawróć</h2>
      <DateInfo>date</DateInfo>
    </InnerWrapper>
    <InnerWrapper flex>
      <p>Ogarnął mnie smutek, że odchodzisz...</p>
      <img className='comeBack' src='./media/baby-come-back.jpg' alt='' />
      <Link to='/'>
        <Button secondary>Go Back!!!</Button>
      </Link>
    </InnerWrapper>
  </StyledWrapper>
);

export default Logout;
