import { Body2Bol, Body3Reg, Caption1Med } from 'components/text/Text';
import * as S from './postCards.style.jsx';
import { useState } from 'react';
import userIconImage from 'assets/images/default-profile-image.png';
import KebabButton from 'components/kebabButton/KebabButton.jsx';

const PostCardItem = ({ testData }) => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [dislike, setDislike] = useState(false);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [kebabOpen, setKebabOpen] = useState(false);

  const handleLikeClick = () => {
    setLike(true);
    setLikeCount((prev) => prev + 1);
  };

  const handleDislikeClick = () => {
    setDislike(true);
    setDislikeCount((prev) => prev + 1);
  };

  const isEdit = true;
  // 추후 "답변하기" 버튼을 통해 진입했을 때 케밥 버튼 보이도록 렌더링 조건 수정 필요

  return (
    <S.PostCardItem>
      <S.AnswerAndKebabBox>
        <S.AnswerCheckBox $isAnswered={testData.isAnswered}>
          <Caption1Med>
            {testData.isAnswered ? '답변완료' : '미답변'}
          </Caption1Med>
        </S.AnswerCheckBox>
        {isEdit && <KebabButton kebabOpen={kebabOpen} onClick={setKebabOpen} />}
      </S.AnswerAndKebabBox>
      <S.TitleBox>
        <S.UpdateTimeBox>
          <Caption1Med>질문 · {testData.updateTimeAgoQuestion}</Caption1Med>
        </S.UpdateTimeBox>
        <Body2Bol>{testData.title}</Body2Bol>
      </S.TitleBox>
      <S.ContentBox>
        <S.ProfileImage src={userIconImage} alt="유저 아이콘 이미지" />
        <S.ContentTextBox>
          <S.ContentUserInfoBox>
            <Body2Bol>{testData.userName}</Body2Bol>
            <S.UpdateTimeBox>
              <Caption1Med>{testData.updateTimeAgoAnswer}</Caption1Med>
            </S.UpdateTimeBox>
          </S.ContentUserInfoBox>
          {testData.content === '거절' ? (
            <S.RefuseAnswerBox>
              <Body3Reg>답변 거절</Body3Reg>
            </S.RefuseAnswerBox>
          ) : testData.content ? (
            <Body3Reg>{testData.content}</Body3Reg>
          ) : null}
        </S.ContentTextBox>
      </S.ContentBox>
      <S.LikeButtonBox>
        <S.LikeButton $like={like} onClick={handleLikeClick}>
          <S.LikeImage $like={like} />
          <Caption1Med>좋아요 {likeCount}</Caption1Med>
        </S.LikeButton>
        <S.DislikeButton $dislike={dislike} onClick={handleDislikeClick}>
          <S.DisLikeImage $dislike={dislike} />
          <Caption1Med> 싫어요 {dislikeCount}</Caption1Med>
        </S.DislikeButton>
      </S.LikeButtonBox>
    </S.PostCardItem>
  );
};

export default PostCardItem;
