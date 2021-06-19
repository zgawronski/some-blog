import { createGlobalStyle } from 'styled-components';
import Colors from 'styledHelpers/Colors';

const GlobalStyle = createGlobalStyle`

    *, * ::before, * ::after {
        box-sizing: border-box;
    }

    body {
        padding-left: 200px;
        font-family: 'Montserrat', sans-serif;
        color: ${Colors.white}
    }
`;

export default GlobalStyle;
