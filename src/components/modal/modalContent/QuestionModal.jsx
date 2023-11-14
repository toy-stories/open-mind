import { useEffect, useState } from 'react';
import useAsync from 'hooks/useAsync.js';
import * as S from 'components/modal/modalContent/questionModal.style.jsx';
import createQuestion from 'utils/createQuestion.js';
import { TextType, Text } from 'components/text/Text.jsx';
import COLORS from 'utils/colors.js';
import QnaForm from 'components/qnaForm/QnaForm.jsx';
import Toast from 'components/toast/Toast.jsx';

const TOAST_TEXT_TYPE = {
  NONE: '',
  SUCCESS: '질문이 정상 등록되었습니다',
  LOADING: '질문을 등록 중입니다',
  ERROR: '오류가 발생했습니다',
  EMPTY: '질문 내용을 입력해주세요.',
};

const QuestionModal = ({ subjectOwner, onClickClose, setQuestionInfo }) => {
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
      subjectId: subjectOwner?.id,
      content: question,
    });

    if (result) {
      setToastStatus('SUCCESS');
      setQuestion('');
      setQuestionInfo((prev) => ({
        ...prev,
        results: [result, ...prev.results],
        count: Number(prev.count) + 1,
        next: Number(prev.next) + 1,
      }));
      onClickClose();
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
        <Text
          $normalType={TextType.Body2Bol}
          style={{ marginRight: '0.3rem' }}
          text="To."
        />
        <S.SubjectImage
          src={subjectOwner?.imageSource}
          width="28px"
          height="28px"
        />
        <Text $normalType={TextType.Body3Reg} text={subjectOwner?.name} />
      </S.SubjectContainer>
      <QnaForm
        input={question}
        handleInputChange={(e) => setQuestion(e.target.value)}
        inputPlaceholder="질문을 입력해주세요"
        buttonText="질문 보내기"
        type="Q"
        onClickButton={handleCreateQuestion}
      />
      {toastStatus !== 'NONE' && <Toast text={TOAST_TEXT_TYPE[toastStatus]} />}
    </S.QuestionModalWrapper>
  );
};
export default QuestionModal;
