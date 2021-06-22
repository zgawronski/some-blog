import styled from 'styled-components';
import edit2 from 'assets/icons/edit2.png';
import Colors from 'styledHelpers/Colors';


const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 10px;
  background-color: ${Colors.primary};
  background-image: url(${edit2});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 50%;
  border: 1px solid ${Colors.white};
  &.active {
    background-color: ${Colors.white};
    border: 1px solid ${Colors.buttonSecondary};
  }
`;

export default ButtonIcon;
