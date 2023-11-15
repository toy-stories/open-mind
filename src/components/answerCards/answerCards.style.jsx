import { styled } from 'styled-components';
import { ReactComponent as ThumbsUpImage } from 'assets/icons/thumbs-up.svg';
import { ReactComponent as ThumbsDownImage } from 'assets/icons/thumbs-down.svg';
import { ReactComponent as MessagesImage } from 'assets/icons/Messages.svg';
import COLORS from 'utils/colors';

export const PostCardItem = styled.li`
  display: flex;
  padding: 3.2rem;
  flex-direction: column;
  gap: 3.2rem;
  border-radius: 1.6rem;
  box-shadow: 0 0.4rem 0.4rem 0 rgba(140, 140, 140, 0.25);
  background: white;
  position: relative;
`;

export const AnswerAndKebabBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AnswerCheckBox = styled.div`
  display: flex;
  padding: 0.4rem 1.2rem;
  justify-content: center;
  border-radius: 0.8rem;
  border: 1px solid
    ${(props) => (props.$isAnswered ? COLORS.BROWN40 : COLORS.GRAY40)};
  width: max-content;
  color: ${(props) => (props.$isAnswered ? COLORS.BROWN40 : COLORS.GRAY40)};
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const UpdateTimeBox = styled.div`
  color: ${COLORS.GRAY30};
`;

export const ContentBox = styled.div`
  display: flex;
  gap: 1.2rem;
  align-self: stretch;
`;

export const ContentUserInfoBox = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

export const ContentTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 0.5rem;
  width: 100%;
`;

export const ProfileImage = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
`;

export const LikeButtonBox = styled.div`
  display: flex;
  gap: 3.2rem;
  padding-top: 2.4rem;
  border-top: 1px solid ${COLORS.GRAY30};
  align-items: center;
  flex-wrap: wrap;
`;

export const LikeButton = styled.button`
  border: none;
  color: ${(props) => (props.$like ? COLORS.BLUE : COLORS.GRAY40)};
  display: flex;
  gap: 0.6rem;
`;

export const DislikeButton = styled.button`
  border: none;
  color: ${(props) => (props.$dislike ? 'black' : COLORS.GRAY40)};
  display: flex;
  gap: 0.6rem;
`;

export const LikeImage = styled(ThumbsUpImage)`
  width: 1.6rem;
  height: 1.6rem;
  path {
    fill: ${(props) => (props.$like ? COLORS.BLUE : COLORS.GRAY40)};
  }
`;

export const DisLikeImage = styled(ThumbsDownImage)`
  width: 1.6rem;
  height: 1.6rem;
  path {
    fill: ${(props) => (props.$dislike ? 'black' : COLORS.GRAY40)};
  }
`;

export const RefuseAnswerBox = styled.div`
  color: ${COLORS.RED};
`;

export const PostCardList = styled.ul`
  padding: 13.6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.6rem;
  background: ${COLORS.BROWN10};
  border: 1px solid ${COLORS.BROWN30};
  border-radius: 1.6rem;
`;

export const PostCardListTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: -0.4rem;
  color: ${COLORS.BROWN40};
`;

export const SpeechBubble = styled(MessagesImage)`
  width: 2.4rem;
  height: 2.4rem;
  path {
    fill: ${COLORS.BROWN40};
  }
`;

export const EditButtonItem = styled.div`
  margin-left: auto;

  @media only screen and (max-width: 454px) {
    margin-left: 0;
  }
`;

export const QnaFormItem = styled.div`
  width: 100%;
`;

export const FloatingButtonItem = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 1rem;
`;
