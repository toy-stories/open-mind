import * as S from 'components/kebabButton/kebabButton.style.jsx';
import { Text, TextType } from 'components/text/Text';

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
      {!isRejectedAnswer && !hasAnswer && (
        <S.KebabMenuButton onClick={onRefuseAnswerClick}>
          <Text $normalType={TextType.Caption1Med} text="답변 거절" />
        </S.KebabMenuButton>
      )}
      {hasAnswer && (
        <S.KebabMenuButton onClick={onDeleteAnswerClick}>
          <Text
            $normalType={TextType.Caption1Med}
            text={isRejectedAnswer ? '답변 받기' : '답변 삭제'}
          />
        </S.KebabMenuButton>
      )}
      <S.KebabMenuButton onClick={onDeleteQuestionClick}>
        <Text $normalType={TextType.Caption1Med} text="질문 삭제" />
      </S.KebabMenuButton>
    </S.KebabMenuList>
  );
};

export default KebabMenuButtons;
