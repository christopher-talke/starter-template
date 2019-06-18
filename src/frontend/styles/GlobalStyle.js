import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --main: #0000ff;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
