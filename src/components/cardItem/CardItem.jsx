import React from 'react';
import * as S from './cardItem.style.jsx';
import defaultProfileImage from 'assets/images/default-profile-image.png';
import messageIcon from 'assets/icons/Messages.svg';
import { Text, textType } from 'components/text/Text.jsx';

const CardItem = ({
  name,
  imageSource = defaultProfileImage,
  questionCount,
  isShow,
}) => {
  return (
    <S.CardContainer $isShow={isShow}>
      <S.UserInfoBox>
        <S.ProfileImage src={imageSource} alt={`${name}님의 프로필 사진`} />
        <Text type={textType.Body1Bol} text={name} />
      </S.UserInfoBox>
      <S.QuestionInfoBox>
        <S.MessageIcon src={messageIcon} />
        <Text type={textType.Body3Reg} text="받은 질문" />
        <Text type={textType.Body3Reg} text={`${questionCount}개`} />
      </S.QuestionInfoBox>
    </S.CardContainer>
  );
};

export default CardItem;
