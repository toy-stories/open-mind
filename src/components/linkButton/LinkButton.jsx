import { StyledLinkButton } from './linkButton.style.jsx';
import { ReactComponent as ArrowRightTailIcon } from 'assets/icons/arrow-right-tail.svg';
import { Body3Bol } from 'components/text/Text.jsx';
import { styled } from 'styled-components';
import COLORS from 'utils/colors.js';

const ArrowRightImage = styled(ArrowRightTailIcon)`
  width: 18px;
  height: 18px;
  path {
    fill: ${(props) => (props.$isActive ? COLORS.BROWN40 : COLORS.BROWN30)};
  }
`;
const LinkButton = ({ type, isActive }) => {
  return (
    <StyledLinkButton $isActive={isActive}>
      <Body3Bol>{type === 'Q' ? '질문하러 가기' : '답변하러 가기'}</Body3Bol>
      <ArrowRightImage $isActive={isActive} alt="오른쪽 화살표 이미지" />
    </StyledLinkButton>
  );
};

export default LinkButton;
