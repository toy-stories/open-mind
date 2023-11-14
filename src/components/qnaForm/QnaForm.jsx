import React from 'react';
import * as S from 'components/qnaForm/qnaForm.style.jsx';
import { Text, TextType } from 'components/text/Text.jsx';

const QnaForm = ({
  input,
  handleInputChange,
  inputPlaceholder,
  buttonText,
  onClickButton,
}) => {
  const handleButtonClick = (e) => {
    onClickButton();
  };

  return (
    <S.Form>
      <S.Textarea
        placeholder={inputPlaceholder}
        value={input}
        onChange={handleInputChange}
      />
      <S.Button $answer={input} type="submit" onClick={handleButtonClick}>
        <Text $normalType={TextType.Body3Reg} text={buttonText} />
      </S.Button>
    </S.Form>
  );
};

export default QnaForm;
