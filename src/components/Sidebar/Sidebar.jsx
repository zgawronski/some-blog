import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from 'styledHelpers/ButtonIcon';
import Colors from 'styledHelpers/Colors';
import logout from 'assets/icons/logout.png'

const BarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${Colors.primary};
  .logo {
    width: 67px;
    height: 67px;
    border-radius: 10px;
    margin-bottom: 50px;
  }
  .imgP {
    font-weight: bold;
  }
`;

const StyledLinksList = styled.ul`
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
  button {
    margin-bottom: 5vh;
  }
`;

const LogoutButton = styled.div`
  margin-top: auto;
  margin-bottom: 5vh;
  .logout{
    background-image: url(${logout});
    background-size: 40px;
  }
`;

// eslint-disable-next-line react/prefer-stateless-function
class Sidebar extends React.Component {
  render() {
    return (
      <BarWrapper>
        <p className='imgP'>Some Blog</p>
        <Link to='/'>
          <img className='logo' src='./media/logo.png' alt='#' />
        </Link>
        <StyledLinksList>
          <li>
            <Link to='/Favorite'>
              <ButtonIcon />
            </Link>
          </li>

          <li>
            <Link to='/AllPosts'>
              <ButtonIcon />
            </Link>
          </li>
        </StyledLinksList>
        <LogoutButton>
          <Link to='/logout'>
            <ButtonIcon className='logout'/>
          </Link>
        </LogoutButton>
      </BarWrapper>
    );
  }
}

export default Sidebar;
