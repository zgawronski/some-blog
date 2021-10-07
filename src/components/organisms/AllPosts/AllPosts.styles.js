import Colors from 'assets/styles/Colors';
import styled from 'styled-components';

export const BlogDiv2 = styled.div`
  padding: 10px;
  div {
    margin-bottom: 20px;
  }
  .pagination {
    display: flex;
    position: relative;
    justify-content: center;
    color: ${Colors.primary};
    cursor: pointer;
    margin-top: 0;
    background-color: ${Colors.white};
    list-style-type: none;
    .active {
      color: ${Colors.black};
      padding: 5px;
    }
    .break-me {
      padding: 5px;
    }
    .page {
      padding: 5px;
    }
    .next {
      padding: 5px;
    }
    .previous {
      padding: 5px;
    }
  }
`;
