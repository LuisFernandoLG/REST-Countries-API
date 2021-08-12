import { createGlobalStyle, css } from "styled-components";

const resetStyles = css`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul,
  ol {
    list-style: none;
  }

  html {
    font-size: 16px;
  }
`;

export const GlobalStyles = createGlobalStyle`
/* ${resetStyles} */

a{
  text-decoration: none;
}

body{
    font-family: 'Nunito Sans', sans-serif;


}
`;
