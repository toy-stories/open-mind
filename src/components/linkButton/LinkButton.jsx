import { Link } from 'react-router-dom';
import { StyledLinkButton } from './linkButton.style.jsx';
import arrowRightTailImage from 'assets/icons/arrow-right-tail.svg';
import { Body3Bol } from 'components/text/Text.jsx';

import { styled } from 'styled-components';

const ArrowRightImage = styled.img`
  width: 18px;
  height: 18px;
`;
const LinkButton = (/*{id, type, status }*/) => {
  // 메인페이지 api 연동 완료되면 id 프롭스로 받기
  const id = 1; // 테스트코드 (value, null)

  const answerPath = id ? '/post' : '/';

  return (
    <div>
      <Link to={answerPath}>
        <StyledLinkButton>
          <Body3Bol>답변하러 가기</Body3Bol>
          <ArrowRightImage
            src={arrowRightTailImage}
            alt="오른쪽 화살표 이미지"
          />
        </StyledLinkButton>
      </Link>
    </div>
  );
};

export default LinkButton;
