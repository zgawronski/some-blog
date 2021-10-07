import styled, { css } from 'styled-components';
import { Wrapper } from 'assets/styles/Components';
import Colors from 'assets/styles/Colors';

export const StyledWrapper = styled(Wrapper)`
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  margin-bottom: 5vh;

  ${({ smaller }) =>
    smaller &&
    css`
      width: 350px;
      transition: 500ms;
    `}
  ${({ bigger }) =>
    bigger &&
    css`
      width: 900px;
      height: 500px;
      transition: 500ms;
      position: relative;
      top: 10%;
      left: 20%;
      z-index: 1;
    `}
`;

export const InnerWrapper = styled.div`
  padding: 17px 30px;
  background-color: ${({ activeColor }) => (activeColor ? Colors.primary : Colors.white)};

  h3 {
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
  .comment {
    position: absolute;
    right: -20px;
    bottom: 17px;
  }
  .hide {
    opacity: 0;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
  .p {
    color: ${Colors.white};
  }
`;
