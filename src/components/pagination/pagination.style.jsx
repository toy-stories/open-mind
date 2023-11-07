import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from 'utils/colors.js';

export const PaginationList = styled.ul`
  display: flex;
`;

export const PaginationItem = styled(NavLink)`
  display: flex;
  width: 4rem;
  height: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${COLORS.GRAY40};
  &:hover,
  &.active {
    color: ${COLORS.BROWN40};
  }
`;
