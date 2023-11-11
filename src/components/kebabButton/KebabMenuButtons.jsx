import { useEffect, useState } from 'react';
import * as S from './kebabButton.style.jsx';

const KebabMenuButtons = ({
  onRefuseAnswerClick,
  onDeleteAnswerClick,
  onDeleteQuestionClick,
  isRefuseAnswer,
  postData,
}) => {
  const [isRejected, setIsRejected] = useState(true);

  useEffect(() => {
    setIsRejected(postData?.answer?.isRejected || isRefuseAnswer);
  }, [isRefuseAnswer, postData?.answer?.isRejected]);
  return (
    <S.KebabMenuList>
      <S.KebabMenuButton $isRejected={isRejected} onClick={onRefuseAnswerClick}>
        답변 거절
      </S.KebabMenuButton>
      <S.KebabMenuButton onClick={onDeleteAnswerClick}>
        답변 삭제
      </S.KebabMenuButton>
      <S.KebabMenuButton onClick={onDeleteQuestionClick}>
        질문 삭제
      </S.KebabMenuButton>
    </S.KebabMenuList>
  );
};

export default KebabMenuButtons;
