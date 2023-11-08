import * as S from './questionModal.style.js';

export default function QuestionModal({ children, title, onClickClose }) {
  return (
    <S.QuestionModalWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      QuestionModal
    </S.QuestionModalWrapper>
  );
}
