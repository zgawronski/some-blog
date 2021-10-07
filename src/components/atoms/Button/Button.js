import styled, { css } from 'styled-components';
import Colors from 'assets/styles/Colors';
import FontSize from 'assets/styles/FontSize';

const Button = styled.button`
  background-color: ${Colors.primary};
  color: ${Colors.white};
  width: 160px;
  height: 30px;
  border: none;
  border-radius: 50px;
  font-size: ${FontSize[10]};
  font-weight: bold;
  text-transform: uppercase;
  :active {
    background-color: ${Colors.white};
    color: ${Colors.primary};
    border: 1px solid ${Colors.buttonSecondary};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${Colors.buttonSecondary};
      width: 105px;
      height: 30px;
      font-size: ${FontSize[10]};
      font-weight: bold;
      color: ${Colors.primary};
      :active {
        background-color: ${Colors.white};
        border: 1px solid ${Colors.buttonSecondary};
      }
    `}
`;

export default Button;
