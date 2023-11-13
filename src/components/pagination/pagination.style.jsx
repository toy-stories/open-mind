import styled, { keyframes } from 'styled-components';
import COLORS from 'utils/colors.js';
import ReactPaginate from 'react-paginate';
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
export const PaginationList = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  animation: ${({ $isShow }) => ($isShow ? fadeIn : fadeOut)} 0.5s forwards;
  li {
    display: flex;
    width: 4rem;
    height: 4rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${COLORS.GRAY40};
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Actor;
    font-size: 2rem;
    line-height: 2.5rem;
    &:hover {
      color: ${COLORS.BLACK};
    }
    &.selected {
      color: ${COLORS.BROWN40};
    }
    &.previous,
    &.next {
      display: none;
    }
  }
`;
