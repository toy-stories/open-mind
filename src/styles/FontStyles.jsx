import { createGlobalStyle } from 'styled-components';
import ActorRegularFontSrc from 'assets/fonts/Actor-Regular.ttf';
import PretendardRegularFontSrc from 'assets/fonts/Pretendard-Regular.woff';
import PretendardMediumFontSrc from 'assets/fonts/Pretendard-Medium.woff';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Actor-Regular';
    font-weight: 400;
    src: url(${ActorRegularFontSrc}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    font-weight: 400;
    src: url(${PretendardRegularFontSrc}) format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard-Medium';
    font-weight: 500;
    src: url(${PretendardMediumFontSrc}) format('woff');
    font-display: swap;
  }

  body {
    font-family: 'Actor-Regular', BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default FontStyles;
