import useAsync from 'hooks/useAsync.js';
import * as S from './questionModal.style.js';
import createQuestion from 'utils/createQuestion.js';

const QuestionModal = ({ onClickClose }) => {
  return (
    <S.QuestionModalWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <S.TitleContainer>
        <S.TitleImage width="28px" height="28px" />
        <S.TitleText>질문을 작성하세요</S.TitleText>
        <S.CloseButton onClick={onClickClose}>
          <S.CloseImage width="28px" height="28px" />
        </S.CloseButton>
      </S.TitleContainer>
      <S.SubjectContainer>
        <S.To>To.</S.To>
        <S.SubjectImage src="" width="28px" height="28px" />
        <S.SubjectName>고양이가 어쩌구</S.SubjectName>
      </S.SubjectContainer>
    </S.QuestionModalWrapper>
  );
};
export default QuestionModal;
