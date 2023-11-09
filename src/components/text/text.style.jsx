import styled, { css } from 'styled-components';

const fontFeatureSettings = css`
  font-feature-settings:
    'clig' off,
    'liga' off;
`;

export const Text = styled.p`
  ${(props) =>
    props.fontFeatureSetting &&
    css`
      ${fontFeatureSettings}
    `}
  font-family: ${(props) => props.textType.font};
  font-size: ${(props) => props.textType.size};
  font-weight: ${(props) => props.textType.weight};
  line-height: ${(props) => props.textType.height};
`;

export default Text;
