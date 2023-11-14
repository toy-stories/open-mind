import { Text, TextType } from 'components/text/Text.jsx';
import * as S from 'components/postCards/tempQuestionCards.style.jsx';
import QuestionCardItem from 'components/postCards/QuestionCardItem';
import FloatingButton from 'components/floatingButton/FloatingButton.jsx';
import { postCreateReaction } from 'pages/post/postPage.js';
import { useState } from 'react';
import useAsync from 'hooks/useAsync.js';

const REACTION_MAX_INT = 2147483647;

const QuestionCardList = ({ questionInfo, subjectOwner, openModal }) => {
  const { results, count } = questionInfo;
  const [questions, setQuestions] = useState(results);

  const [isPending, hasError, postCreateReactionAsync] =
    useAsync(postCreateReaction);

  const handleReaction = async (questionIndex, questionId, type) => {
    const localStorageReaction = JSON.parse(localStorage.getItem(type)) || {};
    if (
      localStorageReaction[questionId] ||
      questions[questionIndex][type] >= REACTION_MAX_INT
    )
      return;

    const result = await postCreateReactionAsync(type, questionId);
    setQuestions((prev) => {
      const newQuestions = [...prev];
      newQuestions[questionIndex] = {
        ...newQuestions[questionIndex],
        [type]: result[type],
      };
      return newQuestions;
    });
    localStorageReaction[questionId] = true;
    localStorage.setItem(type, JSON.stringify(localStorageReaction));
  };
  return (
    <>
      <FloatingButton type="W" onClick={openModal} />

      <S.PostCardList>
        <S.PostCardListTitleBox>
          <S.SpeechBubble />
          <Text
            $normalType={TextType.Body1Bol}
            $mobileType={TextType.Body2Bol}
            text={`${count}개의 질문이 있습니다.`}
          />
        </S.PostCardListTitleBox>
        {questions?.map((question, questionIndex) => (
          <QuestionCardItem
            key={question.id}
            question={question}
            setQuestions={setQuestions}
            subjectOwner={subjectOwner}
            questionIndex={questionIndex}
            handleReaction={handleReaction}
          />
        ))}
      </S.PostCardList>
    </>
  );
};

export default QuestionCardList;
