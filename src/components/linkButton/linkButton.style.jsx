import { styled } from 'styled-components';
import COLORS from 'utils/colors.js';

export const StyledLinkButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid ${COLORS.BROWN40};
  background: ${COLORS.BROWN10};
`;
