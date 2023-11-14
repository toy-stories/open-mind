import { styled } from 'styled-components';
import { ReactComponent as EditIcon } from 'assets/icons/Edit.svg';
import COLORS from 'utils/colors.js';

export const EditIconImage = styled(EditIcon)`
  width: 1.4rem;
  height: 1.4rem;
  path {
    fill: ${({ $isEditActive }) =>
      $isEditActive ? `${COLORS.BLUE}` : `${COLORS.GRAY50}`};
  }
`;

export const EditButton = styled.button`
  width: 10.3rem;
  padding: 0.4rem 0;
  gap: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${COLORS.GRAY30};
  background: ${COLORS.WHITE};
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
  margin-left: auto;
  color: ${({ $isEditActive }) =>
    $isEditActive ? `${COLORS.BLUE}` : `${COLORS.GRAY50}`};

  &:hover {
    color: ${COLORS.BLACK};

    ${EditIconImage} {
      path {
        fill: ${COLORS.BLACK};
      }
    }
  }
`;
