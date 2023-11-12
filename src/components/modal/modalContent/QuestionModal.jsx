import { useEffect, useState } from 'react';
import useAsync from 'hooks/useAsync.js';
import * as S from './questionModal.style.js';
import createQuestion from 'utils/createQuestion.js';
import { TextType, Text } from 'components/text/Text.jsx';
import COLORS from 'utils/colors.js';
import QnaForm from 'components/qnaForm/QnaForm.jsx';
import Toast from 'components/toast/Toast.jsx';

const sampleId = '158';

const TOAST_TEXT_TYPE = {
  NONE: '',
  SUCCESS: '질문이 정상 등록되었습니다',
  LOADING: '질문을 등록 중입니다',
  ERROR: '오류가 발생했습니다',
  EMPTY: '질문 내용을 입력해주세요.',
};

const QuestionModal = ({ onClickClose }) => {
  const [question, setQuestion] = useState('');
  const [toastStatus, setToastStatus] = useState('NONE');
  const [isPending, error, createQuestionAsync] = useAsync(createQuestion);

  async function handleCreateQuestion() {
    if (!question) {
      setToastStatus('EMPTY');
      return;
    }

    if (isPending) {
      setToastStatus('LOADING');
      return;
    }

    const result = await createQuestionAsync({
      subjectId: sampleId,
      content: question,
    });

    if (result) {
      setToastStatus('SUCCESS');
      setQuestion('');
    } else {
      setToastStatus('ERROR');
    }
  }

  useEffect(() => {
    let timer;
    if (toastStatus !== 'NONE') {
      timer = setTimeout(() => {
        setToastStatus('NONE');
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [toastStatus]);

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
          $mobileType={TextType.Body1Bol}
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
        input={question}
        handleInputChange={(e) => setQuestion(e.target.value)}
        inputPlaceholder="질문을 입력해주세요"
        buttonText="질문 보내기"
        onClickButton={handleCreateQuestion}
      />
      {toastStatus !== 'NONE' && <Toast text={TOAST_TEXT_TYPE[toastStatus]} />}
    </S.QuestionModalWrapper>
  );
};
export default QuestionModal;
