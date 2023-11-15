import { Text, TextType } from 'components/text/Text.jsx';
import * as S from 'components/answerCards/answerCards.style.jsx';
import AnswerCardItem from 'components/answerCards/AnswerCardItem.jsx';
import FloatingButton from 'components/floatingButton/FloatingButton.jsx';
import { postCreateReaction } from 'pages/post/postPage.js';
import useAsync from 'hooks/useAsync.js';
import LoadingSpinner from 'components/tempLoading/TempLoading';
import { handleDeleteUser } from 'utils/deleteUser';

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

  const handleDeleteClick = () => {
    handleDeleteUser(subjectOwner);
  };

  return (
    <>
      <FloatingButton type="A" onClick={handleDeleteClick} />
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
