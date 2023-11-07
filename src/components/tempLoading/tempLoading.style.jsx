import styled, { keyframes } from 'styled-components';

export const SpinnerWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SpinnerAnimation = keyframes`
    100% {
      transform: rotate(360deg);
  
}`;
export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 30rem;
  animation: ${SpinnerAnimation} 1.5s linear infinite;
  font-size: 8rem;
`;
