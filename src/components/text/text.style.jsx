import styled, { css } from 'styled-components';
import { RESPONSIBLE_SIZE } from 'utils/constants';

const fontFeatureSettings = css`
  font-feature-settings:
    'clig' off,
    'liga' off;
`;
export const Text = styled.p`
  ${fontFeatureSettings}
  font-family: ${(props) => props.$normalType?.font};
  font-size: ${(props) => props.$normalType?.size};
  font-weight: ${(props) => props.$normalType?.weight};
  line-height: ${(props) => props.$normalType?.height};
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    font-family: ${(props) => props.$mobileType?.font};
    font-size: ${(props) => props.$mobileType?.size};
    font-weight: ${(props) => props.$mobileType?.weight};
    line-height: ${(props) => props.$mobileType?.height};
  }
`;

export default Text;
