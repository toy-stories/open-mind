import * as S from './kebabButton.style.jsx';

const KebabMenuButtons = ({
  onRefuseAnswerClick,
  onDeleteAnswerClick,
  onDeleteQuestionClick,
  postData,
}) => {
  const isRejectedAnswer = postData?.answer?.isRejected;
  const hasAnswer = postData?.answer;

  return (
    <S.KebabMenuList>
      {!isRejectedAnswer && (
        <S.KebabMenuButton onClick={onRefuseAnswerClick}>
          답변 거절
        </S.KebabMenuButton>
      )}
      {hasAnswer && (
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
