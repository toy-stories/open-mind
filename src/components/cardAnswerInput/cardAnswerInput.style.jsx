import styled from 'styled-components';
import COLORS from 'utils/colors';

export const CardAnswerFrameBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`;

export const UserProfileImage = styled.img`
  width: 4.8rem;
  height: 4.8rem;
`;

export const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AnswerInput = styled.input`
  display: flex;
  text-align: start;
  height: 18.6rem;
  margin-top: 0.4rem;
  margin-bottom: 0.8rem;
  padding: 1.6rem;
  border-radius: 8px;
  background: ${COLORS.GRAY20};
  color: ${COLORS.GRAY40};
`;

export const AnswerButton = styled.button`
  display: flex;
  height: 4.6rem;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: ${COLORS.BROWN30};
  color: ${COLORS.WHITE};
`;
