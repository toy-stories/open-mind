import styled from 'styled-components';
import COLORS from 'utils/colors.js';
import { H3, Body2Bol, Body3Reg } from 'components/text/Text.jsx';
import { ReactComponent as MessageIcon } from 'assets/icons/Messages.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/Close.svg';

export const QuestionModalWrapper = styled.section`
  width: 61.2rem;
  padding: 4rem 4rem 7.2rem;
  border-radius: 2.4rem;
  background: ${COLORS.WHITE};
  box-shadow: 0px 16px 20px 0px rgba(48, 48, 48, 0.62);
`;

export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.8rem;
  align-items: center;
  margin-bottom: 4.3rem;
`;

export const TitleImage = styled(MessageIcon)``;

export const TitleText = styled(H3)``;

export const CloseButton = styled.button``;

export const SubjectContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CloseImage = styled(CloseIcon)``;

export const To = styled(Body2Bol)`
  margin-right: 0.3rem;
`;

export const SubjectImage = styled.img`
  margin-right: 0.4rem;
`;

export const SubjectName = styled(Body3Reg)``;
