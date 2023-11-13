import { useEffect, useState } from 'react';
import * as S from './kebabButton.style.jsx';

const KebabMenuButtons = ({
  onRefuseAnswerClick,
  onDeleteAnswerClick,
  onDeleteQuestionClick,
  rejectedAnswerContent,
  isDeleteAnswer,
  postData,
}) => {
  const isRejectedAnswer = postData?.answer?.isRejected;
  const [isRejected, setIsRejected] = useState(true);

  useEffect(() => {
    setIsRejected(isRejectedAnswer || rejectedAnswerContent);
  }, [rejectedAnswerContent, isRejectedAnswer, isDeleteAnswer]);
  return (
    <S.KebabMenuList>
      {!isRejected && (
        <S.KebabMenuButton onClick={onRefuseAnswerClick}>
          답변 거절
        </S.KebabMenuButton>
      )}
      {!isDeleteAnswer && (
        <S.KebabMenuButton onClick={onDeleteAnswerClick}>
          답변 삭제
        </S.KebabMenuButton>
      )}
      <S.KebabMenuButton onClick={onDeleteQuestionClick}>
        질문 삭제
      </S.KebabMenuButton>
    </S.KebabMenuList>
  );
};

export default KebabMenuButtons;
