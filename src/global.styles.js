import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    } */

    body {
        font-family: "Open Sans Condensed", sans-serif;
        padding: 20px 60px;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }
`;