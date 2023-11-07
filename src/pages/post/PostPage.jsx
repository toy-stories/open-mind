import * as S from 'pages/post/postPage.style.js';
import { H2, Body1Bol } from 'components/text/Text.jsx';
import headerImage from 'assets/images/header-background.png';
import logo from 'assets/images/logo.png';
import defaultProfileImage from 'assets/images/default-profile-image.png';
import messagesIcon from 'assets/icons/Messages.svg';
import emptyImg from 'assets/images/no-question.png';
import ShareButtons from 'components/shareButtons/ShareButtons.jsx';
import FloatingButton from 'components/floatingButton/FloatingButton.jsx';

const PostPage = () => {
  return (
    <S.PostPageContainer>
      <S.HeaderImage src={headerImage} alt="헤더 배경 이미지" />
      <S.Logo src={logo} alt="오픈마인드 로고" />
      <S.HeaderUserProfile>
        <S.ProfileImage src={defaultProfileImage} alt="유저 프로필 이미지" />
        <H2>아초는 고양이</H2>
      </S.HeaderUserProfile>
      <ShareButtons />
      <S.FeedCardsBox>
        <S.MessageBox>
          <S.MessageIcon src={messagesIcon} alt="메세지 아이콘" />
          <Body1Bol>아직 질문이 없습니다.</Body1Bol>
        </S.MessageBox>
        <S.EmptyImage src={emptyImg} alt="빈 박스 이미지" />
      </S.FeedCardsBox>
      <FloatingButton />
    </S.PostPageContainer>
  );
};

export default PostPage;
