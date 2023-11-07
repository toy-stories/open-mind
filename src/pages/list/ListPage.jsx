import logoImage from 'assets/images/logo.png';
import LinkButton from 'components/linkButton/LinkButton.jsx';
import { styled } from 'styled-components';

const LogoImage = styled.img`
  width: 146px;
  height: 57px;
`;

const ListPage = () => {
  return (
    <section>
      <LogoImage src={logoImage} alt="로고이미지" />
      <LinkButton />
    </section>
  );
};
export default ListPage;
