import styled from 'styled-components';
import COLORS from 'utils/colors.js';
import { ReactComponent as arrowUpIcon } from 'assets/icons/Arrow-up.svg';
import { ReactComponent as arrowDownIcon } from 'assets/icons/Arrow-down.svg';
export const DropdownContainer = styled.div`
  width: 7.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: relative;
  z-index: 1;
`;

export const DropdownButton = styled.button`
  word-break: keep-all;
  display: flex;
  padding: 0.8rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  border-radius: 0.8rem;
  border: 1px solid
    ${({ $isOpen }) => ($isOpen ? ` ${COLORS.BLACK}` : ` ${COLORS.GRAY40}`)};
  background-color: ${COLORS.WHITE};
  pointer-events: ${({ $isPending }) => ($isPending ? 'none' : 'auto')};

  color: ${({ $isOpen }) =>
    $isOpen ? ` ${COLORS.BLACK}` : ` ${COLORS.GRAY40}`};
`;

export const ArrowUpIcon = styled(arrowUpIcon)`
  width: 1.8rem;
  height: 1.8rem;
  path {
    fill: ${COLORS.BLACK};
  }
`;
export const ArrowDownIcon = styled(arrowDownIcon)`
  width: 1.8rem;
  height: 1.8rem;
  path {
    fill: ${COLORS.GRAY40};
  }
`;

export const DropdownList = styled.ul`
  display: flex;
  width: 7.9rem;
  padding: 0.4rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 1px solid ${COLORS.GRAY30};
  background-color: ${COLORS.WHITE};
  position: absolute;
  top: 4rem;
  box-shadow: 0 0.4rem 0.4rem 0 rgba(140, 140, 140, 0.25);
`;

export const ArrowIcon = styled.img`
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
