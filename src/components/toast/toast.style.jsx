import { styled } from 'styled-components';
import COLORS from 'utils/colors.js';

export const ToastBox = styled.div`
  display: inline-flex;
  padding: 1.2rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${COLORS.GRAY60};
  color: ${COLORS.WHITE};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
