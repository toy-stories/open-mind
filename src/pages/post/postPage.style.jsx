import { styled } from 'styled-components';
import COLORS from 'utils/colors.js';
import { ReactComponent as MessageIconSvg } from 'assets/icons/Messages.svg';
import { RESPONSIBLE_SIZE } from 'utils/constants';
import headerImage from 'assets/images/header-background.png';

export const PostPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.GRAY20};
  min-height: 100vh;
`;

export const HeaderImage = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
`;

export const HeaderContainer = styled.header`
  background-image: url(${headerImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  @media only screen and (max-width: 1820px) {
    background-size: contain;
  }
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    padding: 4rem;
  }
`;

export const Logo = styled.img`
  width: 17rem;
`;

export const ProfileImage = styled.img`
  width: 13.6rem;
  height: 13.6rem;
  border-radius: 50%;
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    width: 10.4rem;
    height: 10.4rem;
  }
`;

export const CardListBox = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.4rem 2.4rem 13.6rem;
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    padding-bottom: 12.6rem;
  }
`;

export const FeedCardsContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 3.2rem;
`;

export const FeedCardsBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 71.6rem;
  height: 100%;
  padding: 1.6rem 2.4rem;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  border: 1px solid ${COLORS.BROWN20};
  background: ${COLORS.BROWN10};
  position: relative;
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
