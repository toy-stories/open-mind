import * as S from 'components/cardAnswerInput/cardAnswerInput.style.jsx';
import { Body2Bol, Body3Reg } from 'components/text/Text';
import userProfileImage from 'assets/images/default-profile-image.png';

const CardAnswerInput = ({ userId = '아초는 고양이' }) => {
  return (
    <S.CardAnswerFrameBox>
      <S.UserProfileImage src={userProfileImage} alt="유저 프로필 이미지" />
      <S.AnswerBox>
        <Body2Bol>{userId}</Body2Bol>
        <S.AnswerInput placeholder="답변을 입력해주세요" />
        <S.AnswerButton>
          <Body3Reg>답변 완료</Body3Reg>
        </S.AnswerButton>
      </S.AnswerBox>
    </S.CardAnswerFrameBox>
  );
};

export default CardAnswerInput;
