import styled, { css } from 'styled-components';
import FontSize from 'assets/styles/FontSize';
import Colors from 'assets/styles/Colors';
import searchIco from 'assets/icons/searchIco.svg';

const Input = styled.input`
  padding: 15px 30px;
  font-size: ${FontSize[12]};
  background-color: ${Colors.inputPrimary};
  border: none;
  border-radius: 50px;
  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${Colors.inputPH};
  }

  ${({ search }) =>
    search &&
    css`
    padding 10px 20px 10px 40px;
    font-size: ${FontSize[10]};
    background-image: url(${searchIco});
    background-size: 15px;
    background-position: 10px 50%;
    background-repeat: no-repeat;
    border: 1px solid ${Colors.primary};
    `}
`;

export default Input;
