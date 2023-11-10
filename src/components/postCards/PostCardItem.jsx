import { Text, TextType } from 'components/text/Text.jsx';
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
          <Text
            $normalType={TextType.Caption1Med}
            text={testData.isAnswered ? '답변완료' : '미답변'}
          />
        </S.AnswerCheckBox>
        {isEdit && <KebabButton kebabOpen={kebabOpen} onClick={setKebabOpen} />}
      </S.AnswerAndKebabBox>
      <S.TitleBox>
        <S.UpdateTimeBox>
          <Text
            $normalType={TextType.Caption1Med}
            text={`질문 · ${testData.updateTimeAgoQuestion}`}
          />
        </S.UpdateTimeBox>
        <Text
          $normalType={TextType.Body2Bol}
          $mobileType={TextType.Body2Bol}
          text={testData.title}
        />
      </S.TitleBox>
      <S.ContentBox>
        <S.ProfileImage src={userIconImage} alt="유저 아이콘 이미지" />
        <S.ContentTextBox>
          <S.ContentUserInfoBox>
            <Text
              $normalType={TextType.Body2Bol}
              $mobileType={TextType.Caption1Bol}
              text={testData.userName}
            />
            <S.UpdateTimeBox>
              <Text
                $normalType={TextType.Caption1Med}
                text={testData.updateTimeAgoAnswer}
              />
            </S.UpdateTimeBox>
          </S.ContentUserInfoBox>
          {testData.content === '거절' ? (
            <S.RefuseAnswerBox>
              <Text $normalType={TextType.Body3Reg} text="답변 거절" />
            </S.RefuseAnswerBox>
          ) : testData.content ? (
            <Text $normalType={TextType.Body3Reg} text={testData.content} />
          ) : null}
        </S.ContentTextBox>
      </S.ContentBox>
      <S.LikeButtonBox>
        <S.LikeButton $like={like} onClick={handleLikeClick}>
          <S.LikeImage $like={like} />
          <Text
            $normalType={TextType.Caption1Med}
            text={`좋아요 ${likeCount}`}
          />
        </S.LikeButton>
        <S.DislikeButton $dislike={dislike} onClick={handleDislikeClick}>
          <S.DisLikeImage $dislike={dislike} />
          <Text
            $normalType={TextType.Caption1Med}
            text={`싫어요 ${dislikeCount}`}
          />
        </S.DislikeButton>
      </S.LikeButtonBox>
    </S.PostCardItem>
  );
};

export default PostCardItem;
