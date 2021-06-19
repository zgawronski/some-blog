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
