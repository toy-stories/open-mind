import { Text, TextType } from 'components/text/Text.jsx';
import * as S from './questionCards.style.jsx';
import { useEffect, useState } from 'react';
import defaultUserIconImage from 'assets/images/default-profile-image.png';
import KebabButton from 'components/kebabButton/KebabButton.jsx';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import { fetchClient, fetchClientJson } from 'utils/apiClient.js';
dayjs.locale('ko');
dayjs.extend(relativeTime);

const QuestionCardItem = ({
  question,
  setQuestionInfo,
  subjectOwner,
  questionIndex,
  handleReaction,
}) => {
  const {
    name: ownerName,
    imageSource: ownerProfileImage = defaultUserIconImage,
  } = subjectOwner;

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [kebabOpen, setKebabOpen] = useState(false);
  const [isDeleteQuestion, setIsDeleteQuestion] = useState(false);

  const isEdit = true;

  // 게시물 작성 시간 계산
  const createdAtQuestion = dayjs(question?.createdAt).format();
  const updateTimeAgoQuestion = dayjs(createdAtQuestion).fromNow();
  const createdAtAnswer = question?.answer?.createdAt;
  let updateTimeAgoAnswer;
  if (createdAtAnswer) {
    const validCreatedAtAnswer = dayjs(createdAtAnswer).format();
    updateTimeAgoAnswer = dayjs(validCreatedAtAnswer).fromNow();
  }

  useEffect(() => {
    const likes = JSON.parse(localStorage.getItem('like')) || {};
    const dislikes = JSON.parse(localStorage.getItem('dislike')) || {};
    if (likes[question.id]) setLiked(true);
    if (dislikes[question.id]) setDisliked(true);
  }, [question]);

  const handleRefuseClick = async () => {
    const results = await fetchClientJson({
      url: `questions/${question?.id}/answers/`,
      method: 'POST',
      body: {
        content: '답변 거절',
        isRejected: true,
      },
    });
    setQuestionInfo((prev) => {
      const newQuestions = [...prev.results];
      newQuestions[questionIndex] = {
        ...newQuestions[questionIndex],
        answer: results,
      };
      return { ...prev, results: newQuestions };
    });
  };
  const handleDeleteAnswerClick = async () => {
    await fetchClient({
      url: `answers/${question?.answer?.id}/`,
      method: 'DELETE',
    });
    setQuestionInfo((prev) => {
      const newQuestions = [...prev.results];
      newQuestions[questionIndex] = {
        ...newQuestions[questionIndex],
        answer: null,
      };
      return { ...prev, results: newQuestions };
    });
  };

  const handleDeleteQuestionClick = async () => {
    await fetchClient({
      url: `questions/${question?.id}/`,
      method: 'DELETE',
    });

    setIsDeleteQuestion(true);
    setQuestionInfo((prev) => {
      const newQuestions = [...prev.results].filter(
        (p) => p.id !== question.id,
      );
      return {
        ...prev,
        results: newQuestions,
        count: Number(prev.count) - 1,
        next: Number(prev.next) - 1,
      };
    });
  };

  return (
    !isDeleteQuestion && (
      <S.PostCardItem>
        <S.AnswerAndKebabBox>
          <S.AnswerCheckBox $isAnswered={question.answer}>
            <Text
              $normalType={TextType.Caption1Med}
              text={`${question.answer ? '답변완료' : '미답변'}`}
            />
          </S.AnswerCheckBox>
          {isEdit && (
            <KebabButton
              onRefuseAnswerClick={handleRefuseClick}
              onDeleteAnswerClick={handleDeleteAnswerClick}
              onDeleteQuestionClick={handleDeleteQuestionClick}
              kebabOpen={kebabOpen}
              onClick={() => setKebabOpen((prev) => !prev)}
              question={question}
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
          <Text $normalType={TextType.Body2Bol} text={question?.content} />
        </S.TitleBox>
        {question?.answer && (
          <S.ContentBox>
            <S.ProfileImage src={ownerProfileImage} alt="유저 아이콘 이미지" />
            <S.ContentTextBox>
              <S.ContentUserInfoBox>
                <Text
                  $normalType={TextType.Body2Bol}
                  $mobileType={TextType.Caption1Bol}
                  text={ownerName}
                />

                <S.UpdateTimeBox>
                  <Text
                    $normalType={TextType.Caption1Med}
                    text={updateTimeAgoAnswer}
                  />
                </S.UpdateTimeBox>
              </S.ContentUserInfoBox>
              {question?.answer?.isRejected ? (
                <S.RefuseAnswerBox>
                  <Text $normalType={TextType.Body3Reg} text="답변 거절" />
                </S.RefuseAnswerBox>
              ) : (
                <Text
                  $normalType={TextType.Body3Reg}
                  text={question.answer.content}
                />
              )}
            </S.ContentTextBox>
          </S.ContentBox>
        )}
        <S.LikeButtonBox>
          <S.LikeButton
            $like={liked}
            onClick={() => handleReaction(questionIndex, question.id, 'like')}
          >
            <S.LikeImage $like={liked} />
            <Text
              $normalType={TextType.Caption1Med}
              text={`좋아요 ${(question.like > 0 || '') && question.like}`}
            />
          </S.LikeButton>
          <S.DislikeButton
            $dislike={disliked}
            onClick={() =>
              handleReaction(questionIndex, question.id, 'dislike')
            }
          >
            <S.DisLikeImage $dislike={disliked} />
            <Text
              $normalType={TextType.Caption1Med}
              text={`싫어요 ${
                (question.dislike > 0 || '') && question.dislike
              }`}
            />
          </S.DislikeButton>
        </S.LikeButtonBox>
      </S.PostCardItem>
    )
  );
};

export default QuestionCardItem;
