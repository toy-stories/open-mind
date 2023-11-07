import styled from 'styled-components';
import COLORS from '../../utils/colors';
import { ReactComponent as arrowUpIcon } from 'assets/icons/Arrow-up.svg';
import { ReactComponent as arrowDownIcon } from 'assets/icons/Arrow-down.svg';
export const DropdownContainer = styled.div`
  width: 7.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const DropdownButton = styled.button`
  word-break: keep-all;
  display: flex;
  padding: 0.8rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  border-radius: 0.8rem;
  border: 1px solid ${COLORS.BLACK};
  background-color: ${COLORS.WHITE};
`;

export const DropdownList = styled.ul`
  display: flex;
  width: 79px;
  padding: 4px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 1px solid ${COLORS.GRAY30};
`;

export const ArrowUpIcon = styled(arrowUpIcon)`
  width: 1.4rem;
  height: 1.4rem;
`;
export const ArrowDownIcon = styled(arrowDownIcon)`
  width: 1.4rem;
  height: 1.4rem;
`;

export const DropdownItem = styled.button`
  display: flex;
  padding: 0.6rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  background-color: ${COLORS.WHITE};
  & p {
    color: ${({ $isSelected }) =>
      $isSelected ? `${COLORS.BLUE}` : `${COLORS.GRAY50}`};
  }
`;
