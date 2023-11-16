import styled from 'styled-components';
import COLORS from 'utils/colors.js';
import { RESPONSIBLE_SIZE } from 'utils/constants.js';
import { ReactComponent as personIcon } from 'assets/icons/Person.svg';
import LinkButton from 'components/linkButton/LinkButton';

export const LogoImage = styled.img`
  width: 45.6rem;
  height: 18rem;
`;

export const MainBackgroundImage = styled.img`
  width: 100%;
  position: absolute;
  z-index: 1;
  bottom: 0;
`;

export const MainPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.GRAY20};
  padding: 4.5rem 0;
  min-height: 100vh;
  position: relative;
  z-index: 0;
`;

export const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90rem;
  width: 100%;
  gap: 7rem;
`;

export const MainPageNav = styled.nav`
  position: relative;
  z-index: 2;
  // padding: 0 12.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (max-width: ${RESPONSIBLE_SIZE.tablet}) {
    padding: 0 4.5rem;
  }

  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    display: none;
  }
`;

export const MainPageMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  gap: 2.4rem;

  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    padding: 8rem 0 0 0;
  }
`;

export const MainPageInnerBox = styled.div`
  display: inline-flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 16px;
  background-color: ${COLORS.WHITE};
`;

export const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const PersonImage = styled(personIcon)`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  position: absolute;
  left: 16px;
`;

export const InnerBoxImage = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const InnerBoxInput = styled.input`
  display: flex;
  width: 336px;
  padding: 12px 16px 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  border: 1px solid ${COLORS.GRAY40};
  background-color: ${COLORS.WHITE};

  &:focus {
    border: 1px solid ${COLORS.BROWN40};
  }
`;

export const InnerBoxButton = styled.button`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  background-color: ${COLORS.BROWN40};
  color: ${COLORS.WHITE};
`;
