import styled from 'styled-components';
import COLORS from 'utils/colors.js';
import { ReactComponent as messageIcon } from 'assets/icons/Messages.svg';

export const CardContainer = styled.div`
  display: flex;
  flex: 1 0 18.6rem;
  max-width: 22rem;
  height: 18.7rem;
  padding: 2rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 1.6rem;
  border: 1px solid ${COLORS.GRAY40};
  background: ${COLORS.WHITE};
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ProfileImage = styled.img`
  width: 6rem;
  border-radius: 6rem;
`;

export const MessageIcon = styled(messageIcon)`
  width: 1.8rem;
  height: 1.8rem;
  path {
    fill: ${COLORS.GRAY40};
  }
`;

export const QuestionInfoBox = styled.div`
  color: ${COLORS.GRAY40};
  display: grid;
  height: 2.2rem;
  grid-template-columns: 1.8rem auto auto;
  gap: 0.4rem;
  width: 100%;
  & :last-child {
    justify-self: end;
  }
`;
