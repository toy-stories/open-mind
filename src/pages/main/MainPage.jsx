import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from 'pages/main/mainPage.style.jsx';
import LinkButton from 'components/linkButton/LinkButton.jsx';
import logoImage from 'assets/images/logo.png';
import mainBackgroundImage from 'assets/images/main-background.png';
import { createFeedId } from './mainPage.js';
import { useNavigate } from 'react-router-dom';
// import personImage from 'assets/icons/Person.svg';

const MainPage = () => {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const id = '1';
  const type = 'Q';
  const isActive = true;

  const answerPath = '/post/{id}/answer';
  const LinkButtonPath = id ? '/list' : '/';

  const navigate = useNavigate();

  const createFeedAndRedirect = async () => {
    const id = await createFeedId(name);
    navigate(`/post/${id}/answer`);
  };

  return (
    <section>
      <S.LogoImage src={logoImage} alt="로고이미지" />
      <S.MainBackgroundImage src={mainBackgroundImage} alt="배경이미지" />
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={handleInputChange}
      />
      <button disabled={!name} onClick={createFeedAndRedirect}>
        질문 받기
      </button>
      <Link to={LinkButtonPath}>
        <LinkButton type={type} isActive={isActive} />
      </Link>
    </section>
  );
};
export default MainPage;
