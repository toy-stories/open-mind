import styled from 'styled-components';
import { RESPONSIBLE_SIZE } from 'utils/constants.js';

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(18.7rem, 22rem));
  gap: 2rem;
  justify-content: center;

  @media only screen and (max-width: ${RESPONSIBLE_SIZE.tablet}) {
    grid-template-columns: repeat(3, 18.6rem);
  }
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    grid-template-columns: repeat(2, 15.5rem);
  }
`;
