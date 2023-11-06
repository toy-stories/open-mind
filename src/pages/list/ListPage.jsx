import logoImage from 'assets/images/logo.png';
import LinkButton from 'components/linkButton/LinkButton.jsx';
import { styled } from 'styled-components';
import { H1 } from 'components/text/Text.jsx';

const LogoImage = styled.img`
  width: 146px;
  height: 57px;
`;

const ListPage = () => {
  return (
    <section>
      <LogoImage src={logoImage} alt="로고이미지" />
      <LinkButton />
      <H1>누구에게 질문할까요?</H1>
    </section>
  );
};
export default ListPage;
