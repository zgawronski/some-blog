import styled, { css } from 'styled-components';
import Colors from 'styledHelpers/Colors';
import FontSize from 'styledHelpers/FontSize';

const Button = styled.button`
  background-color: ${Colors.buttonPrimary};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: ${FontSize[16]};
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${Colors.buttonSecondary};
      width: 105px;
      height: 30px;
      font-size: ${FontSize[10]};
    `}
`;

export default Button;
