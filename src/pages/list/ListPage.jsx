import logoImage from 'assets/images/logo.png';
import LinkButton from 'components/linkButton/LinkButton.jsx';
import { styled } from 'styled-components';
import { H1 } from 'components/text/Text.jsx';
import { Link } from 'react-router-dom';

const LogoImage = styled.img`
  width: 146px;
  height: 57px;
`;

// 테스트코드
const id = '1';
const type = 'Q';
const isActive = false;

const LinkButtonPath = id ? '/post' : '/';

const ListPage = () => {
  return (
    <section>
      <LogoImage src={logoImage} alt="로고이미지" />
      <Link to={LinkButtonPath}>
        <LinkButton type={type} isActive={isActive} />
      </Link>
      <H1>누구에게 질문할까요?</H1>
    </section>
  );
};
export default ListPage;
