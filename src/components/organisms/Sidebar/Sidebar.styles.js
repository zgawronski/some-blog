import styled from 'styled-components';
import Colors from 'assets/styles/Colors';
import logout from 'assets/icons/logout.png';
import allposts from 'assets/icons/allposts.png';

export const BarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
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

export const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  button {
    margin-bottom: 5vh;
  }
  .allposts {
    background-image: url(${allposts});
    background-size: 40px;
    background-position: 50%;
  }
`;

export const LogoutButton = styled.div`
  margin-top: auto;
  margin-bottom: 5vh;
  .logout {
    background-image: url(${logout});
    background-size: 40px;
    background-position: 60%;
  }
`;
