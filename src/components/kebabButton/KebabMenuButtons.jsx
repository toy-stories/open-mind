import * as S from './kebabButton.style.jsx';

const KebabMenuButtons = () => {
  return (
    <S.KebabMenuBox>
      <S.KebabMenuButton>답변 거절</S.KebabMenuButton>
      <S.KebabMenuButton>질문 삭제</S.KebabMenuButton>
      <S.KebabMenuButton>답변 삭제</S.KebabMenuButton>
    </S.KebabMenuBox>
  );
};

export default KebabMenuButtons;
