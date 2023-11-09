import { ReactComponent as kebabIcon } from 'assets/icons/More.svg';
import { styled } from 'styled-components';
import COLORS from 'utils/colors';

export const KebabImage = styled(kebabIcon)`
  width: 2.6rem;
  height: 2.6rem;
`;

export const KebabMenuButton = styled.button`
  width: 7rem;
  height: 3rem;
  border: 1px solid ${COLORS.BROWN40};
  border-radius: 8px;
  color: ${COLORS.BROWN40};
  background: white;

  &:hover {
    background: ${COLORS.BROWN20};
  }
  &:active {
    border: 2px solid ${COLORS.BROWN40};
    background: ${COLORS.BROWN20};
  }
`;

export const KebabMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: absolute;
  right: -5rem;
`;
