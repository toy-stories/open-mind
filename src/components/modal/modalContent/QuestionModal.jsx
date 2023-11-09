import useAsync from 'hooks/useAsync.js';
import * as S from './questionModal.style.js';
import createQuestion from 'utils/createQuestion.js';

export default function QuestionModal({ children, title, onClickClose }) {
  const subjectId = '158';
  const content = '무슨 강아지를 가장 좋아하시나요?';

  const [isLoading, error, createQuestionAsync] = useAsync(createQuestion);

  async function handleCreateQuestion() {
    const result = await createQuestionAsync(subjectId, content);
    console.log(result);
  }

  return (
    <S.QuestionModalWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button onClick={handleCreateQuestion}>Create Question</button>
    </S.QuestionModalWrapper>
  );
}
