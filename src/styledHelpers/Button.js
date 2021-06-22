import styled, { css } from 'styled-components';
import Colors from 'styledHelpers/Colors';
import FontSize from 'styledHelpers/FontSize';

const Button = styled.button`
  background-color: ${Colors.primary};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  font-size: ${FontSize[16]};
  text-transform: uppercase;
  :active {
    background-color: ${Colors.white};
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
