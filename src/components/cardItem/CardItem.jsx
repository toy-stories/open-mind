import React from 'react';
import * as S from './cardItem.style.jsx';
import defaultProfileImage from 'assets/images/default-profile-image.png';
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
        <S.CardBody1Bol>{name}</S.CardBody1Bol>
      </S.UserInfoBox>
      <S.QuestionInfoBox>
        <S.MessageIcon src={messageIcon} />
        <S.CardBody3Reg>받은 질문</S.CardBody3Reg>
        <S.CardBody3Reg>{questionCount}개</S.CardBody3Reg>
      </S.QuestionInfoBox>
    </S.CardContainer>
  );
};

export default CardItem;
