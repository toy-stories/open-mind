import * as S from './linkButton.style.jsx';
import { Text, textType } from 'components/text/Text.jsx';

const LinkButton = ({ type, isActive }) => {
  const buttonText = type === 'Q' ? '질문하러 가기' : '답변하러 가기';
  return (
    <S.StyledLinkButton $isActive={isActive}>
      <Text type={textType.Body3Bol} text={buttonText} />
      <S.ArrowRightImage
        $isActive={isActive}
        aria-label="오른쪽 화살표 이미지"
      />
    </S.StyledLinkButton>
  );
};

export default LinkButton;
