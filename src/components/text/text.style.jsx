import styled, { css } from 'styled-components';

const fontFeatureSettings = css`
  font-feature-settings:
    'clig' off,
    'liga' off;
`;

export const Text = styled.p`
  ${(props) =>
    props &&
    css`
      ${fontFeatureSettings}
    `}
  font-family: ${(props) => props.$font};
  font-size: ${(props) => props.$size};
  font-weight: ${(props) => props.$weight};
  line-height: ${(props) => props.$height};
`;

export default Text;
