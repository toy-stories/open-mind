import styled from 'styled-components';
import COLORS from 'utils/colors.js';
import { RESPONSIBLE_SIZE } from 'utils/constants.js';
import { ReactComponent as personIcon } from 'assets/icons/Person.svg';

export const MainPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.GRAY20};
  min-height: 100vh;
`;

export const MainBackgroundImage = styled.img`
  width: 100%;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

export const MainPageAnswerButton = styled.div`
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 4.5rem;
  padding: 1.2rem 2.4rem;
  right: 12.5rem;
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.tablet}) {
    right: 4.5rem;
  }
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    top: 20.2rem;
    padding: 0.8rem 1.2rem;
    justify-content: center;
    right: auto;
  }
`;

export const LogoImage = styled.img`
  position: fixed;
  top: 16rem;
  width: 45.6rem;
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    top: 8rem;
    width: 24.8rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 36.4rem;
  padding: 3.2rem;
  gap: 1.6rem;
  width: 40rem;
  border-radius: 8px;
  background-color: ${COLORS.WHITE};
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    top: 28rem;
    width: 30.5rem;
    padding: 2.4rem;
  }
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.2rem 1.6rem;
  gap: 0.4rem;
  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.isFocused ? COLORS.BROWN40 : COLORS.GRAY40)};

  &:focus {
    border: 1px solid ${COLORS.BROWN40};
  }
`;

export const PersonImage = styled(personIcon)`
  width: 2rem;
  height: 2rem;
`;

export const InputItem = styled.input`
  flex-grow: 1;
  color: ${(props) => (props.hasValue ? 'black' : COLORS.GRAY40)};
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
  }
`;

export const InnerBoxButton = styled.button`
  padding: 1.2rem 2.4rem;
  align-self: stretch;
  border-radius: 8px;
  background-color: ${COLORS.BROWN40};
  color: ${COLORS.WHITE};
`;
