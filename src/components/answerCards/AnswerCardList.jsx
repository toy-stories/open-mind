import { Text, TextType } from 'components/text/Text.jsx';
import * as S from 'components/answerCards/answerCards.style.jsx';
import AnswerCardItem from 'components/answerCards/AnswerCardItem.jsx';
import FloatingButton from 'components/floatingButton/FloatingButton.jsx';
import { postCreateReaction } from 'pages/post/postPage.js';
import useAsync from 'hooks/useAsync.js';
import LoadingSpinner from 'components/tempLoading/TempLoading';
import { CONFIRM_MESSAGE, DELETE_USER_MESSAGE } from 'utils/constants';
import { fetchClient } from 'utils/apiClient';
import { Swal } from 'sweetalert2';

const REACTION_MAX_INT = 2147483647;

const AnswerCardList = ({
  questionInfo,
  setQuestionInfo,
  subjectOwner,
  isPending,
}) => {
  const [isReactionPending, hasError, postCreateReactionAsync] =
    useAsync(postCreateReaction);

  const handleReaction = async (questionIndex, questionId, type) => {
    const localStorageReaction = JSON.parse(localStorage.getItem(type)) || {};
    if (
      localStorageReaction[questionId] ||
      questionInfo.results[questionIndex][type] >= REACTION_MAX_INT
    )
      return;

    const result = await postCreateReactionAsync(type, questionId);
    setQuestionInfo((prev) => {
      const newQuestions = [...prev.results];
      newQuestions[questionIndex] = {
        ...newQuestions[questionIndex],
        [type]: result[type],
      };
      return { ...prev, results: newQuestions };
    });
    localStorageReaction[questionId] = true;
    localStorage.setItem(type, JSON.stringify(localStorageReaction));
  };

  const handleDeleteId = async () => {
    Swal.fire({
      title:
        '[주의] 계정 삭제는 복구할 수 없으며, 모든 데이터가 영구적으로 제거됩니다.',
      text: '계속하시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '계정삭제',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        fetchClient({
          url: `subjects/${subjectOwner.id}/`,
          method: 'DELETE',
        }).then((result) => {
          localStorage.removeItem('userId');
          Swal.fire({
            title: '계정삭제완료',
            text: '계정이 삭제되었습니다. 메인페이지로 돌아갑니다.',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: '확인',
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.replace('/');
            }
          });
        });
      }
    });
  };

  return (
    <>
      <FloatingButton type="A" onClick={handleDeleteId} />
      <S.PostCardList>
        <S.PostCardListTitleBox>
          <S.SpeechBubble />
          <Text
            $normalType={TextType.Body1Bol}
            $mobileType={TextType.Body2Bol}
            text={`${questionInfo.count}개의 질문이 있습니다.`}
          />
        </S.PostCardListTitleBox>
        {questionInfo.results?.map((question, questionIndex) => (
          <AnswerCardItem
            key={question.id}
            question={question}
            setQuestionInfo={setQuestionInfo}
            subjectOwner={subjectOwner}
            questionIndex={questionIndex}
            handleReaction={handleReaction}
          />
        ))}
        {isPending && <LoadingSpinner />}
      </S.PostCardList>
    </>
  );
};

export default AnswerCardList;
