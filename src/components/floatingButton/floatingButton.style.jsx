import { styled } from 'styled-components';
import COLORS from 'utils/colors.js';
import { RESPONSIBLE_SIZE } from 'utils/constants';

export const FloatingButton = styled.button`
  display: flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.BROWN40};
  border-radius: 200px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  & p::after {
    ${({ $isQuestion }) => ($isQuestion ? "content: '하기';" : "content: '';")}
  }
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    & p::after {
      content: '';
    }
  }
`;
