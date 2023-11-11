import { styled } from 'styled-components';
import COLORS from 'utils/colors.js';
import { ReactComponent as MessageIconSvg } from 'assets/icons/Messages.svg';

export const PostPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderImage = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
`;

export const Logo = styled.img`
  width: 17rem;
  position: absolute;
  top: 5rem;
`;

export const HeaderUserProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProfileImage = styled.img`
  width: 13.6rem;
  height: 13.6rem;
  position: absolute;
  top: 12.9rem;
`;

export const UserIdText = styled.div`
  position: absolute;
  top: 27.7rem;
`;

export const CardListBox = styled.div`
  position: relative;
  margin-top: 42.3rem;
  margin-bottom: 13.6rem;
`;

export const FeedCardsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 71.6rem;
  height: 33rem;
  padding: 1.6rem 2.4rem;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid ${COLORS.BROWN20};
  background: ${COLORS.BROWN10};
  position: relative;
  margin-top: 42.3rem;
  margin-bottom: 13.6rem;
`;

export const MessageIcon = styled(MessageIconSvg)`
  width: 2.4rem;
  height: 2.4rem;
  path {
    fill: ${COLORS.BROWN40};
  }
`;

export const EmptyImage = styled.img`
  width: 15rem;
`;

export const MessageBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  color: ${COLORS.BROWN40};
`;

export const FloatingButtonItem = styled.div`
  position: fixed;
  bottom: 2.4rem;
  right: 2.4rem;
`;
