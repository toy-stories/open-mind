import styled from 'styled-components';
import COLORS from 'utils/colors.js';
import ReactPaginate from 'react-paginate';

export const PaginationList = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
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
    &:hover,
    &.selected {
      color: ${COLORS.BROWN40};
    }
    &.previous,
    &.next {
      display: none;
    }
  }
`;
