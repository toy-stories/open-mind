import * as S from 'components/kebabButton/kebabButton.style.jsx';

const KebabMenuButtons = ({
  onRefuseAnswerClick,
  onDeleteAnswerClick,
  onDeleteQuestionClick,
  question,
}) => {
  const isRejectedAnswer = question?.answer?.isRejected;
  const hasAnswer = question?.answer;

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
