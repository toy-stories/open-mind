import * as S from 'components/floatingButton/floatingButton.style.jsx';
import { Text, textType } from 'components/text/Text.jsx';

const FloatingButton = ({ type }) => {
  const buttonText = type === 'W' ? '질문 작성하기' : '삭제하기';
  return (
    <S.FloatingButton>
      <Text type={textType.Body1Bol} text={buttonText} />
    </S.FloatingButton>
  );
};

export default FloatingButton;
