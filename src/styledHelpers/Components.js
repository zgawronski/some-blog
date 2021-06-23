import styled from 'styled-components';
import { rgba } from 'polished';
import Colors from 'styledHelpers/Colors';

export const boxShadow = () => ({
  boxShadow: `0px 3px 3px ${rgba(Colors.inputTH, 0.05)}, 0px 2px 2px ${rgba(
    Colors.inputTH,
    0.07,
  )}, 0px 1px 1px ${rgba(Colors.inputTH, 0.1)}`,
});

export const Wrapper = styled.div`
  ${boxShadow()};
`;


export const HeadWrapper = styled.div`
  margin-right: 50px;
  margin-top: 30px;
`;
export const BlogDiv = styled.div`
  column-width: 380px;
  margin-top: 50px;
`;

export const HeaderDiv = styled.div`
  h2 {
    margin: 25px 0 0 0;
    color: ${Colors.primary};
  }
  p {
    color: ${Colors.primary};
    margin: 0;
  }
`;
