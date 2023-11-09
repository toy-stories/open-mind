import styled from 'styled-components';
import COLORS from 'utils/colors.js';
import { RESPONSIBLE_SIZE } from 'utils/constants.js';

export const LogoImage = styled.img`
  width: 14.6rem;
  height: 5.7rem;
`;

export const ListPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  background-color: ${COLORS.GRAY20};
  padding: 4rem 0;
  min-height: 100vh;
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
  padding: 0 13rem 4rem;
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

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(18.7rem, 22rem));
  gap: 2rem;
  justify-content: center;
  grid-template-rows: 2;

  @media only screen and (max-width: ${RESPONSIBLE_SIZE.tablet}) {
    grid-template-columns: repeat(3, 18.6rem);
  }
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    grid-template-columns: repeat(2, 15.5rem);
    grid-template-rows: 2;
  }
`;
