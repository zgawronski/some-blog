import styled from 'styled-components';
import { Wrapper } from 'assets/styles/Components';
import Colors from 'assets/styles/Colors';
import fontSize from 'assets/styles/FontSize';

export const StyledWrapper = styled(Wrapper)`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const InnerWrapper = styled.div`
  padding: 15px 15px;
  background-color: ${({ activeColor }) => (activeColor ? Colors.primary : Colors.white)};
  h4 {
    margin: 0;
  }
  p {
    margin: 0;
    color: ${Colors.primary};
    font-size: ${fontSize[14]};
  }
  .favButton2 {
    position: absolute;
    right: 5%;
    top: 10%;
    width: 50px;
    height: 50px;
    background-size: 20px;
    background-position: 50%;
    border-radius: 5px;
  }
`;
