import { styled } from 'styled-components';

import COLORS from 'utils/colors.js';

export const StyledLinkButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  background: ${COLORS.BROWN10};
  border: 1px solid
    ${(props) => (props.$isActive ? COLORS.BROWN40 : COLORS.BROWN30)};
  color: ${(props) => (props.$isActive ? COLORS.BROWN40 : COLORS.BROWN30)};

  &:hover {
    border: 2px solid ${COLORS.BROWN40};
  }
  &:active {
    border: 2px solid ${COLORS.BROWN40};
    background: ${COLORS.BROWN20};
  }
`;
