import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from 'pages/main/mainPage.style.jsx';
import logoImage from 'assets/images/logo.png';
import mainBackgroundImage from 'assets/images/main-background.png';
import { createFeedId } from './mainPage.js';
import LinkButton from 'components/linkButton/LinkButton.jsx';

const MainPage = () => {
  const [name, setName] = useState('');

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
      <S.MainPage>
        <S.MainPageNav>
          <Link to={LinkButtonPath}>
            <LinkButton type={type} isActive={isActive} />
          </Link>
        </S.MainPageNav>
        <S.MainPageMain>
          <S.LogoImage src={logoImage} alt="로고이미지" />
          <S.MainPageInnerBox>
            <S.InputBoxContainer>
              <S.PersonImage />
              <S.InnerBoxInput
                type="text"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={handleInputChange}
              />
            </S.InputBoxContainer>
            <S.InnerBoxButton disabled={!name} onClick={createFeedAndRedirect}>
              질문 받기
            </S.InnerBoxButton>
          </S.MainPageInnerBox>
        </S.MainPageMain>
      </S.MainPage>
    </S.MainPageContainer>
  );
};
export default MainPage;
