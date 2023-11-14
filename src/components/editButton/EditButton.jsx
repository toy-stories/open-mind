import * as S from 'components/editButton/editButton.style.jsx';
import { Text, TextType } from 'components/text/Text.jsx';

const EditButton = ({ isEditActive }) => {
  return (
    <S.EditButton $isEditActive={isEditActive}>
      <S.EditIconImage
        $isEditActive={isEditActive}
        aria-label="수정하기 아이콘"
      />
      <Text $normalType={TextType.Caption1Med} text="수정하기" />
    </S.EditButton>
  );
};

export default EditButton;
