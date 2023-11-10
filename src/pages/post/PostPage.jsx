import * as S from 'pages/post/postPage.style.jsx';
import { Text, TextType } from 'components/text/Text.jsx';
import headerImage from 'assets/images/header-background.png';
import logo from 'assets/images/logo.png';
import defaultProfileImage from 'assets/images/default-profile-image.png';
import emptyImg from 'assets/images/no-question.png';
import ShareButtons from 'components/shareButtons/ShareButtons.jsx';
import FloatingButton from 'components/floatingButton/FloatingButton.jsx';
import PostCardList from 'components/postCards/PostCardList';
import EditButton from 'components/editButton/EditButton';
import QnaForm from 'components/qnaForm/QnaForm';

// 테스트 코드
const isActive = true;

const PostPage = () => {
  // 추후 api연동하여 데이터 프롭스로 받기
  // 테스트코드
  const hasQuestion = true;

  return (
    <S.PostPageContainer>
      <S.HeaderImage src={headerImage} alt="헤더 배경 이미지" />
      <S.Logo src={logo} alt="오픈마인드 로고" />
      <S.HeaderUserProfile>
        <S.ProfileImage src={defaultProfileImage} alt="유저 프로필 이미지" />
        <Text
          $normalType={TextType.H2}
          $mobileType={TextType.H3}
          text="아초는 고양이"
        />
      </S.HeaderUserProfile>
      <ShareButtons />
      {hasQuestion ? (
        <PostCardList />
      ) : (
        <S.FeedCardsBox>
          <S.MessageBox>
            <S.MessageIcon alt="메세지 아이콘" />
            <Text
              $normalType={TextType.Body1Bol}
              text="아직 질문이 없습니다."
            />
          </S.MessageBox>
          <S.EmptyImage src={emptyImg} alt="빈 박스 이미지" />
        </S.FeedCardsBox>
      )}
      <FloatingButton type="W" />
      <EditButton isActive={isActive} />
      <QnaForm />
    </S.PostPageContainer>
  );
};

export default PostPage;
