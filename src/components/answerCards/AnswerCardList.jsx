import { Text, TextType } from 'components/text/Text.jsx';
import * as S from 'components/answerCards/answerCards.style.jsx';
import AnswerCardItem from 'components/answerCards/AnswerCardItem.jsx';
import FloatingButton from 'components/floatingButton/FloatingButton.jsx';
import { postCreateReaction } from 'pages/post/postPage.js';
import { useState } from 'react';
import useAsync from 'hooks/useAsync.js';
import { fetchClient } from 'utils/apiClient';
import { CONFIRM_MESSAGE, DELETE_USER_MESSAGE } from 'utils/constants.js';

const REACTION_MAX_INT = 2147483647;

const AnswerCardList = ({ questionInfo, subjectOwner, subjectId }) => {
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

  const handleDeleteId = async () => {
    if (window.confirm(CONFIRM_MESSAGE)) {
      await fetchClient({
        url: `subjects/${subjectId}/`,
        method: 'DELETE',
      });
      localStorage.removeItem('userId');
      alert(DELETE_USER_MESSAGE);
      window.location.replace('/');
    }
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
            text={`${count}개의 질문이 있습니다.`}
          />
        </S.PostCardListTitleBox>
        {questions?.map((question, questionIndex) => (
          <AnswerCardItem
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

export default AnswerCardList;
