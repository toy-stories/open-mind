import * as S from 'components/editButton/editButton.style.jsx';
import { Caption1Med } from 'components/text/Text.jsx';

const EditButton = ({ isActive }) => {
  return (
    <S.EditButton $isActive={isActive}>
      <S.EditIconImage $isActive={isActive} aria-label="수정하기 아이콘" />
      <Caption1Med>수정하기</Caption1Med>
    </S.EditButton>
  );
};

export default EditButton;
