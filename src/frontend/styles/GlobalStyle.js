import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #fff;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
