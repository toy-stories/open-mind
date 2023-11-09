import logoImage from 'assets/images/logo.png';
import LinkButton from 'components/linkButton/LinkButton.jsx';
import { H1 } from 'components/text/Text.jsx';
import { Link } from 'react-router-dom';
import * as S from './listPage.style.js';

// 테스트코드
const id = '1';
const type = 'Q';
const isActive = true;

const LinkButtonPath = id ? '/post' : '/';

const ListPage = () => {
  return (
    <section>
      <S.LogoImage src={logoImage} alt="로고이미지" />
      <Link to={LinkButtonPath}>
        <LinkButton type={type} isActive={isActive} />
      </Link>
      <H1>누구에게 질문할까요?</H1>
    </section>
  );
};
export default ListPage;
