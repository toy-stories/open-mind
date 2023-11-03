import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  .a11y {
    font-size: 0;
    width: 1px;
    height: 1px;
    display: inline-block;
    overflow: hidden;
    position: absolute;
    border: 0;
    padding: 0;
    margin: 0;
    clip: rect(1px, 1px, 1px, 1px);
  }
`;

export default GlobalStyles;
