import { Text, TextType } from 'components/text/Text.jsx';
import * as S from './QuestionCards.style.jsx';
import { useState } from 'react';
import userIconImage from 'assets/images/default-profile-image.png';
import KebabButton from 'components/kebabButton/KebabButton.jsx';
import dayjs from 'dayjs';

const QuestionCardItem = ({ data }) => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [dislike, setDislike] = useState(false);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [kebabOpen, setKebabOpen] = useState(false);

  const [isRefuseAnswer, setIsRefuseAnswer] = useState(false);
  const [isDeleteAnswer, setIsDeleteAnswer] = useState(false);
  const [isDeleteQuestion, setIsDeleteQuestion] = useState(false);

  const handleLikeClick = () => {
    // TODO: api 연동
    setLike(true);
    setLikeCount((prev) => prev + 1);
  };

  const handleDislikeClick = () => {
    //TODO: api 연동
    setDislike(true);
    setDislikeCount((prev) => prev + 1);
  };

  const isEdit = true;
  // TODO: "답변하기" 버튼을 통해 진입했을 때 케밥 버튼 보이도록 렌더링 조건 수정 필요
  // TODO: data.answer 값이 있을때만 답변자 아이콘 보이게 하기

  // 게시물 작성 시간 계산
  const createdAtQuestion = dayjs(data?.createdAt).format();
  const updateTimeAgoQuestion = dayjs(createdAtQuestion).fromNow();
  const createdAtAnswer = data?.answer?.createdAt;
  let updateTimeAgoAnswer;
  if (createdAtAnswer) {
    const validCreatedAtAnswer = dayjs(createdAtAnswer).format();
    updateTimeAgoAnswer = dayjs(validCreatedAtAnswer).fromNow();
  }

  const testData = [
    {
      id: '1',
      isAnswered: true,
      title: '좋아하는 동물은?',
      userName: '아초는 고양이',
    },
    {
      id: '2',
      isAnswered: false,
      title: '좋아하는 동물은?',
      userName: '아초는 고양이',
    },
    {
      id: '3',
      isAnswered: true,
      title: '좋아하는 동물은?',
      userName: '아초는 고양이',
    },
  ];

  return (
    !isDeleteQuestion && (
      <S.PostCardItem>
        <S.AnswerAndKebabBox>
          <S.AnswerCheckBox $isAnswered={data.answer}>
            <Text
              $normalType={TextType.Caption1Med}
              text={`${data.answer ? '답변완료' : '미답변'}`}
            />
          </S.AnswerCheckBox>
          {isEdit && (
            <KebabButton
              onRefuseAnswerClick={() => {
                setIsRefuseAnswer(true);
              }}
              onDeleteAnswerClick={() => {
                setIsDeleteAnswer(true);
              }}
              onDeleteQuestionClick={() => {
                setIsDeleteQuestion(true);
              }}
              kebabOpen={kebabOpen}
              onClick={() => setKebabOpen((prev) => !prev)}
            />
          )}
        </S.AnswerAndKebabBox>
        <S.TitleBox>
          <S.UpdateTimeBox>
            <Text
              $normalType={TextType.Caption1Med}
              text={`질문 · ${updateTimeAgoQuestion}`}
            />
          </S.UpdateTimeBox>
          <Text $normalType={TextType.Body2Bol} text={`${data?.content}`} />
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
                  text={updateTimeAgoAnswer}
                />
              </S.UpdateTimeBox>
            </S.ContentUserInfoBox>
            {!isDeleteAnswer &&
              (isRefuseAnswer ? (
                <S.RefuseAnswerBox>
                  <Text $normalType={TextType.Body3Reg} text="답변 거절" />
                </S.RefuseAnswerBox>
              ) : (
                data?.answer?.content && (
                  <Text
                    $normalType={TextType.Body3Reg}
                    text={data?.answer?.content}
                  />
                )
              ))}
          </S.ContentTextBox>
        </S.ContentBox>
        <S.LikeButtonBox>
          <S.LikeButton $like={like} onClick={handleLikeClick}>
            <S.LikeImage $like={like} />
            <Text
              $normalType={TextType.Caption1Med}
              text={`좋아요 ${(likeCount > 1 || '') && likeCount}`}
            />
          </S.LikeButton>
          <S.DislikeButton $dislike={dislike} onClick={handleDislikeClick}>
            <S.DisLikeImage $dislike={dislike} />
            <Text
              $normalType={TextType.Caption1Med}
              text={`싫어요 ${(dislikeCount > 1 || '') && dislikeCount}`}
            />
          </S.DislikeButton>
        </S.LikeButtonBox>
      </S.PostCardItem>
    )
  );
};

export default QuestionCardItem;
