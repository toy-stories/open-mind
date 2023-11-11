import { useState } from 'react';
import useAsync from 'hooks/useAsync.js';
import * as S from './questionModal.style.js';
import createQuestion from 'utils/createQuestion.js';
import { TextType, Text } from 'components/text/Text.jsx';
import COLORS from 'utils/colors.js';
import QnaForm from 'components/qnaForm/QnaForm.jsx';

const QuestionModal = ({ onClickClose }) => {
  const [input, setInput] = useState('');

  const [isLoading, error, createQuestionAsync] = useAsync(createQuestion);

  const subjectId = '158';
  const content = '무슨 강아지를 가장 좋아하시나요?';
  // TODO 토스트 띄우고 창 닫기

  async function handleCreateQuestion() {
    const result = await createQuestionAsync(subjectId, content);
    console.log(result);
    // TODO 토스트 띄우고 창 닫기
  }

  return (
    <S.QuestionModalWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <S.TitleContainer>
        <S.TitleImage width="28px" height="28px" />
        <Text
          $normalType={TextType.H3}
          text="질문을 작성하세요"
          style={{ color: COLORS.BLACK }}
        />
        <S.CloseButton onClick={onClickClose}>
          <S.CloseImage width="28px" height="28px" />
        </S.CloseButton>
      </S.TitleContainer>
      <S.SubjectContainer>
        <Text $normalType={TextType.Body2Bol} style={{ marginRight: '0.3rem' }}>
          To.
        </Text>
        <S.SubjectImage src="" width="28px" height="28px" />
        <Text $normalType={TextType.Body3Reg}>고양이가 어쩌구</Text>
      </S.SubjectContainer>
      <QnaForm
        input={input}
        handleInputChange={(e) => setInput(e.target.value)}
        inputPlaceholder="질문을 입력해주세요"
        buttonText="질문 보내기"
        onClickButton={handleCreateQuestion}
      />
    </S.QuestionModalWrapper>
  );
};
export default QuestionModal;
