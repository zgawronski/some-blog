import styled, { css } from 'styled-components';
import { Wrapper } from 'assets/styles/Components';
import Colors from 'assets/styles/Colors';

export const StyledWrapper = styled(Wrapper)`
  margin: auto;
  margin-top: 100px;
  width: 800px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

export const InnerWrapper = styled.div`
  padding: 17px 30px;
  background-color: ${({ activeColor }) => (activeColor ? Colors.primary : Colors.white)};
  h2 {
    margin: 0;
  }
  p {
    margin: 0;
    color: ${Colors.primary};
  }
  .favButton {
    position: absolute;
    right: 5%;
    top: 10%;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
  .comeBack {
    margin: auto;
    width: 50%;
  }
`;

export const DateInfo = styled.p``;
