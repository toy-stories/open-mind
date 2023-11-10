import * as S from 'components/editButton/editButton.style.jsx';
import { Text, textType } from 'components/text/Text.jsx';

const EditButton = ({ isActive }) => {
  return (
    <S.EditButton $isActive={isActive}>
      <S.EditIconImage $isActive={isActive} aria-label="수정하기 아이콘" />
      <Text type={textType.Caption1Med} text="수정하기" />
    </S.EditButton>
  );
};

export default EditButton;
