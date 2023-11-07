import styled from 'styled-components';
import COLORS from 'utils/colors.js';
import { RESPONSIBLE_SIZE } from 'utils/constants.js';

export const ListPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  background-color: ${COLORS.GRAY20};
  height: 100vh;
`;

export const ListPage = styled.div`
  max-width: 120rem;
  width: 100%;
`;
export const ListPageMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    padding: 0 2.4rem;
  }
`;

export const ListPageNav = styled.nav`
  padding: 4rem 13rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    flex-direction: column;
    gap: 2rem;
    & p {
      font-size: 1.4rem;
    }
  }
`;

export const ListPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  margin: 0 auto;
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    flex-direction: row;
    gap: 4.2rem;
    & h1 {
      font-size: 2.4rem;
    }
  }
`;
