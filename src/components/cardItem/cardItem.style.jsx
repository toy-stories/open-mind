import styled from 'styled-components';
import COLORS from 'utils/colors.js';
import { ReactComponent as messageIcon } from 'assets/icons/Messages.svg';
import { Body1Bol, Body3Reg } from 'components/text/Text.jsx';
import { RESPONSIBLE_SIZE } from 'utils/constants.js';

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
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    height: 16.8rem;
  }
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`;

export const ProfileImage = styled.img`
  width: 6rem;
  border-radius: 6rem;
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    width: 4.8rem;
  }
`;

export const MessageIcon = styled(messageIcon)`
  width: 1.8rem;
  height: 1.8rem;
  path {
    fill: ${COLORS.GRAY40};
  }
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    width: 1.6rem;
    height: 1.6rem;
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

export const CardBody1Bol = styled(Body1Bol)`
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
`;

export const CardBody3Reg = styled(Body3Reg)`
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    font-size: 1.4rem;
    line-height: normal;
  }
`;
