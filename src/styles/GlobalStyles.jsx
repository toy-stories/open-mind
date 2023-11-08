import { createGlobalStyle } from 'styled-components';
import { Z_INDEX } from 'utils/constants';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  #root {
    position: relative;
    z-index: ${Z_INDEX.PAGE};
  }

  #modal-root {
    position: relative;
    z-index: ${Z_INDEX.MODAL};
  }
`;

export default GlobalStyles;
