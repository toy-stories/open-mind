import React, { useState } from 'react';
import * as S from 'components/cardAnswerInput/cardAnswerInput.style.jsx';
import { textType } from 'components/text/Text.jsx';

const CardAnswerInput = () => {
  const [answer, setAnswer] = useState('');
  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <S.AnswerBox>
      <S.AnswerInput
        placeholder="답변을 입력해주세요"
        value={answer}
        onChange={handleInputChange}
      />
      <S.StyledAnswerButton answer={answer}>
        <S.Text type={textType.Body3Reg} text="답변 완료" />
      </S.StyledAnswerButton>
    </S.AnswerBox>
  );
};

export default CardAnswerInput;
