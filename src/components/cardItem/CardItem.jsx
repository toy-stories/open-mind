import React from 'react';
import * as S from './cardItem.style.jsx';
import defaultProfileImage from 'assets/images/default-profile-image.png';
import messageIcon from 'assets/icons/Messages.svg';
import { Text, TextType } from 'components/text/Text.jsx';

const CardItem = ({
  name,
  imageSource = defaultProfileImage,
  questionCount,
  isPending,
}) => {
  return (
    <S.CardContainer $isShow={!isPending}>
      <S.UserInfoBox>
        <S.ProfileImage src={imageSource} alt={`${name}님의 프로필 사진`} />
        <Text
          $normalType={TextType.Body1Bol}
          $mobileType={TextType.Body2Reg}
          text={name}
        />
      </S.UserInfoBox>
      <S.QuestionInfoBox>
        <S.MessageIcon src={messageIcon} />
        <Text
          $normalType={TextType.Body3Reg}
          $mobileType={TextType.Caption1Reg}
          text="받은 질문"
        />
        <Text
          $normalType={TextType.Body3Reg}
          $mobileType={TextType.Caption1Reg}
          text={`${questionCount}개`}
        />
      </S.QuestionInfoBox>
    </S.CardContainer>
  );
};

export default CardItem;
