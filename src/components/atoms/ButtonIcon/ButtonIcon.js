import styled from 'styled-components';
import favorite from 'assets/icons/favorite.png';
import Colors from 'assets/styles/Colors';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 10px;
  background-color: ${Colors.primary};
  background-image: url(${favorite});
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: 50%;
  border: 1px solid ${Colors.white};
  :active {
    background-color: ${Colors.white};
    border: 1px solid ${Colors.buttonSecondary};
  }
`;

export default ButtonIcon;
