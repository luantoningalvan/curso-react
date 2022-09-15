import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
    }

    body, button, input, textarea {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased
    }
`;
