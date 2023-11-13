import * as S from 'components/floatingButton/floatingButton.style.jsx';
import { Text, TextType } from 'components/text/Text.jsx';

const FloatingButton = ({ type, onClick }) => {
  const buttonText = type === 'W' ? '질문 작성' : '삭제하기';

  return (
    <S.FloatingButton $isQuestion={type === 'W'} onClick={onClick}>
      <Text $normalType={TextType.Body1Bol} text={buttonText} />
    </S.FloatingButton>
  );
};

export default FloatingButton;
