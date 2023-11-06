import React from 'react';
import * as S from './cardItem.style.jsx';
import defaultProfileImage from 'assets/images/default-profile-image.png';
import { Body1Bol, Body3Reg } from 'components/text/Text.jsx';
import messageIcon from 'assets/icons/Messages.svg';

const CardItem = ({
  name,
  imageSource = defaultProfileImage,
  questionCount,
}) => {
  return (
    <S.CardContainer>
      <S.UserInfoBox>
        <S.ProfileImage src={imageSource} alt={`${name}님의 프로필 사진`} />
        <Body1Bol>{name}</Body1Bol>
      </S.UserInfoBox>
      <S.QuestionInfoBox>
        <S.MessageIcon src={messageIcon} />
        <Body3Reg>받은 질문</Body3Reg>
        <Body3Reg>{questionCount}개</Body3Reg>
      </S.QuestionInfoBox>
    </S.CardContainer>
  );
};

export default CardItem;
