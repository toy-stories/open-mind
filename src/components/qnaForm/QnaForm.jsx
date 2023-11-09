import React, { useState } from 'react';
import * as S from 'components/qnaForm/qnaForm.style.jsx';
import { Text, textType } from 'components/text/Text.jsx';

const QnaForm = () => {
  const [input, setInput] = useState('');
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <S.AnswerBox>
      <S.AnswerInput
        placeholder="답변을 입력해주세요"
        value={input}
        onChange={handleInputChange}
      />
      <S.StyledAnswerButton $answer={input}>
        <Text type={textType.Body3Reg} text="답변 완료" />
      </S.StyledAnswerButton>
    </S.AnswerBox>
  );
};

export default QnaForm;
