import { Text, TextType } from 'components/text/Text.jsx';
import * as S from 'components/answerCards/answerCards.style.jsx';
import { useEffect, useState } from 'react';
import useAsync from 'hooks/useAsync.js';
import createAnswer from 'utils/createAnswer.js';
import editAnswer from 'utils/editAnswer.js';
import defaultUserIconImage from 'assets/images/default-profile-image.png';
import KebabButton from 'components/kebabButton/KebabButton.jsx';
import EditButton from 'components/editButton/EditButton';
import QnaForm from 'components/qnaForm/QnaForm';
import Toast from 'components/toast/Toast.jsx';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import { fetchClient, fetchClientJson } from 'utils/apiClient';
dayjs.locale('ko');
dayjs.extend(relativeTime);

const TOAST_TEXT_TYPE = {
  NONE: '',
  SUCCESS: '답변이 정상 등록되었습니다',
  LOADING: '답변을 등록 중입니다',
  ERROR: '오류가 발생했습니다',
  EMPTY: '답변 내용을 입력해주세요.',
};

const AnswerCardItem = ({
  question,
  setQuestions,
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
  const [answer, setAnswer] = useState('');
  const [kebabOpen, setKebabOpen] = useState(false);
  const [toastStatus, setToastStatus] = useState('NONE');
  const [isPending, error, createAnswerAsync] = useAsync(createAnswer);
  const [isDeleteQuestion, setIsDeleteQuestion] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);

  // 게시물 작성 시간 계산
  const createdAtQuestion = dayjs(question?.createdAt).format();
  const updateTimeAgoQuestion = dayjs(createdAtQuestion).fromNow();
  const createdAtAnswer = question?.answer?.createdAt;
  let updateTimeAgoAnswer;
  if (createdAtAnswer) {
    const validCreatedAtAnswer = dayjs(createdAtAnswer).format();
    updateTimeAgoAnswer = dayjs(validCreatedAtAnswer).fromNow();
  }

  const handleEditButtonClick = () => {
    setIsEditActive((prev) => !prev);
    setAnswer(question.answer.content);
  };

  const handleCreateAnswer = async () => {
    if (!answer) {
      setToastStatus('EMPTY');
      return;
    }

    if (isPending) {
      setToastStatus('LOADING');
      return;
    }

    const result = await createAnswerAsync({
      questionId: question.id,
      content: answer,
    });

    if (result) {
      setToastStatus('SUCCESS');
      setAnswer('');
    }
    if (error) {
      setToastStatus('ERROR');
    }
  };

  const handleUpdateAnswer = async () => {
    if (!answer) {
      setToastStatus('EMPTY');
      return;
    }

    setToastStatus('LOADING');
    try {
      const updatedAnswer = await editAnswer({
        answerId: question.answer.id,
        content: answer,
      });

      setQuestions((prev) => {
        const newQuestions = [...prev];
        const updatedQuestion = {
          ...newQuestions[questionIndex],
          answer: updatedAnswer,
        };
        newQuestions[questionIndex] = updatedQuestion;
        return newQuestions;
      });

      setToastStatus('SUCCESS');
      setIsEditActive(false); // 편집 상태 종료
    } catch (error) {
      console.error(error);
      setToastStatus('ERROR');
    }
  };

  const handleRefuseClick = async () => {
    const results = await fetchClientJson({
      url: `questions/${question.id}/answers/`,
      method: 'POST',
      body: {
        content: '답변 거절',
        isRejected: true,
      },
    });
    setQuestions((prev) => {
      const newQuestions = [...prev];
      newQuestions[questionIndex] = {
        ...newQuestions[questionIndex],
        answer: results,
      };
      return newQuestions;
    });
  };

  const handleDeleteAnswerClick = async () => {
    await fetchClient({
      url: `answers/${question?.answer?.id}/`,
      method: 'DELETE',
    });

    setQuestions((prev) => {
      const newQuestions = [...prev];
      newQuestions[questionIndex] = {
        ...newQuestions[questionIndex],
        answer: null,
      };
      return newQuestions;
    });
  };

  const handleDeleteQuestionClick = async () => {
    await fetchClient({
      url: `questions/${question?.id}/`,
      method: 'DELETE',
    });

    setIsDeleteQuestion(true);
  };

  useEffect(() => {
    const likes = JSON.parse(localStorage.getItem('like')) || {};
    const dislikes = JSON.parse(localStorage.getItem('dislike')) || {};
    if (likes[question.id]) setLiked(true);
    if (dislikes[question.id]) setDisliked(true);
  }, [question]);

  useEffect(() => {
    let timer;
    if (toastStatus !== 'NONE') {
      timer = setTimeout(() => {
        setToastStatus('NONE');
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [toastStatus]);

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

          <KebabButton
            onRefuseAnswerClick={handleRefuseClick}
            onDeleteAnswerClick={handleDeleteAnswerClick}
            onDeleteQuestionClick={handleDeleteQuestionClick}
            kebabOpen={kebabOpen}
            onClick={() => setKebabOpen((prev) => !prev)}
            question={question}
          />
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
            {!question?.answer && (
              <S.QnaFormItem>
                <QnaForm
                  input={answer}
                  handleInputChange={(e) => setAnswer(e.target.value)}
                  inputPlaceholder="답변을 입력해주세요"
                  buttonText="답변 완료"
                  onClickButton={handleCreateAnswer}
                />
                {toastStatus !== 'NONE' && (
                  <Toast text={TOAST_TEXT_TYPE[toastStatus]} />
                )}
              </S.QnaFormItem>
            )}
            {question?.answer && !isEditActive && (
              <S.EditButtonItem onClick={handleEditButtonClick}>
                <EditButton isEditActive={isEditActive} />
              </S.EditButtonItem>
            )}

            {question?.answer?.isRejected ? (
              <S.RefuseAnswerBox>
                <Text $normalType={TextType.Body3Reg} text="답변 거절" />
              </S.RefuseAnswerBox>
            ) : isEditActive ? (
              <QnaForm
                input={answer}
                handleInputChange={(e) => setAnswer(e.target.value)}
                inputPlaceholder="수정 내용을 입력해주세요"
                buttonText="수정 완료"
                onClickButton={handleUpdateAnswer} // 수정 완료 버튼 클릭 핸들러
              />
            ) : (
              <Text
                $normalType={TextType.Body3Reg}
                text={question.answer?.content}
              />
            )}
          </S.ContentTextBox>
        </S.ContentBox>
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

export default AnswerCardItem;
