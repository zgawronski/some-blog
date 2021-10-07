import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { BarWrapper, StyledLinksList, LogoutButton } from './Sidebar.styles';

const Sidebar = () => (
  <BarWrapper>
    <p className='imgP'>Some Blog</p>
    <Link to='/'>
      <img className='logo' src='./media/logo.png' alt='#' />
    </Link>
    <StyledLinksList>
      <li>
        <Link to='/Favorites'>
          <ButtonIcon />
        </Link>
      </li>
      <li>
        <Link to='/AllPosts'>
          <ButtonIcon className='allposts' />
        </Link>
      </li>
    </StyledLinksList>
    <LogoutButton>
      <Link to='/logout'>
        <ButtonIcon className='logout' />
      </Link>
    </LogoutButton>
  </BarWrapper>
);

export default Sidebar;
