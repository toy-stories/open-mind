import * as S from 'components/floatingButton/floatingButton.style.jsx';
import { Body1Bol } from 'components/text/Text.jsx';

const FloatingButton = ({ type }) => {
  const buttonText = type === 'W' ? '질문 작성하기' : '삭제하기';
  return (
    <S.FloatingButton>
      <Body1Bol>{buttonText}</Body1Bol>
    </S.FloatingButton>
  );
};

export default FloatingButton;
