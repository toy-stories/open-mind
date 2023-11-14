import styled from 'styled-components';
import COLORS from 'utils/colors.js';
import { ReactComponent as MessageIcon } from 'assets/icons/Messages.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/Close.svg';
import { RESPONSIBLE_SIZE } from 'utils/constants';

export const QuestionModalWrapper = styled.section`
  width: 61.2rem;
  padding: 4rem 4rem 7.2rem;
  border-radius: 2.4rem;
  background: ${COLORS.WHITE};
  box-shadow: 0px 16px 20px 0px rgba(48, 48, 48, 0.62);

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    padding: 2.4rem;
  }
`;

export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.8rem;
  align-items: center;
  margin-bottom: 4.3rem;
`;

export const TitleImage = styled(MessageIcon)``;

export const CloseButton = styled.button``;

export const SubjectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const CloseImage = styled(CloseIcon)``;

export const SubjectImage = styled.img`
  margin-right: 0.4rem;
  border-radius: 2.8rem;
`;
