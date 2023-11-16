import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from 'pages/main/mainPage.style.jsx';
import logoImage from 'assets/images/logo.png';
import mainBackgroundImage from 'assets/images/main-background.png';
import { createFeedId } from './mainPage.js';
import LinkButton from 'components/linkButton/LinkButton.jsx';
import { Text, TextType } from 'components/text/Text.jsx';


const MainPage = () => {
  const [name, setName] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const id = '1';
  const type = 'Q';
  const isActive = true;

  const LinkButtonPath = id ? '/list' : '/';

  const navigate = useNavigate();

  const createFeedAndRedirect = async () => {
    const id = await createFeedId(name);
    navigate(`/post/${id}/answer`);
  };

  return (
    <S.MainPageContainer>
      <S.MainBackgroundImage src={mainBackgroundImage} alt="배경이미지" />
      <S.MainPageAnswerButton>
        <Link to={LinkButtonPath}>
          <LinkButton type={type} isActive={isActive} />
        </Link>
      </S.MainPageAnswerButton>
      <S.LogoImage src={logoImage} alt="로고이미지" />
      <S.InputContainer>
        <S.InputBox isFocused={isFocused}>
          <S.PersonImage />
          <S.InputItem
            type="text"
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="이름을 입력하세요"
            value={name}
            onChange={handleInputChange}
            hasValue={name.length > 0}
          />
        </S.InputBox>
        <S.InnerBoxButton disabled={!name} onClick={createFeedAndRedirect}>
          <Text $normalType={TextType.Body3Reg} text="질문 받기" />
        </S.InnerBoxButton>
      </S.InputContainer>
    </S.MainPageContainer>
  );
};
export default MainPage;
