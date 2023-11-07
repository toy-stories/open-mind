import { styled } from 'styled-components';
import { RESPONSIBLE_SIZE } from 'utils/constants';
import { ReactComponent as ArrowRightTailIcon } from 'assets/icons/arrow-right-tail.svg';
import COLORS from 'utils/colors.js';

export const StyledLinkButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.4rem;
  border-radius: 8px;
  background: ${COLORS.BROWN10};
  border: 1px solid
    ${(props) => (props.$isActive ? COLORS.BROWN40 : COLORS.BROWN30)};
  color: ${(props) => (props.$isActive ? COLORS.BROWN40 : COLORS.BROWN30)};

  &:hover {
    border: 2px solid ${COLORS.BROWN40};
  }
  &:active {
    border: 2px solid ${COLORS.BROWN40};
    background: ${COLORS.BROWN20};
  }

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    padding: 0.8rem 1.2rem;
    gap: 0.4rem;
  }
`;

export const ArrowRightImage = styled(ArrowRightTailIcon)`
  width: 18px;
  height: 18px;
  path {
    fill: ${(props) => (props.$isActive ? COLORS.BROWN40 : COLORS.BROWN30)};
  }
`;

import { styled } from 'styled-components';
import { RESPONSIBLE_SIZE } from 'utils/constants';
import { ReactComponent as ArrowRightTailIcon } from 'assets/icons/arrow-right-tail.svg';
import COLORS from 'utils/colors.js';

export const StyledLinkButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.4rem;
  border-radius: 8px;
  background: ${COLORS.BROWN10};
  border: 1px solid
    ${(props) => (props.$isActive ? COLORS.BROWN40 : COLORS.BROWN30)};
  color: ${(props) => (props.$isActive ? COLORS.BROWN40 : COLORS.BROWN30)};

  &:hover {
    border: 2px solid ${COLORS.BROWN40};
  }
  &:active {
    border: 2px solid ${COLORS.BROWN40};
    background: ${COLORS.BROWN20};
  }

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    padding: 0.8rem 1.2rem;
    gap: 0.4rem;
  }
`;

export const ArrowRightImage = styled(ArrowRightTailIcon)`
  width: 18px;
  height: 18px;
  path {
    fill: ${(props) => (props.$isActive ? COLORS.BROWN40 : COLORS.BROWN30)};
  }
`;
