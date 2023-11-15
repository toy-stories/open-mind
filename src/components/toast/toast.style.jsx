import { styled, keyframes } from 'styled-components';
import COLORS from 'utils/colors.js';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const ToastBox = styled.div`
  display: inline-flex;
  padding: 1.2rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  animation: ${({ $isShow }) => ($isShow ? fadeIn : fadeOut)} 0.5s;
  animation-delay: ${({ $isShow }) => ($isShow ? '0s' : '4.5s')};
`;
