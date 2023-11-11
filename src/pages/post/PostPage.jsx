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
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAsync from 'hooks/useAsync';
import { fetchClientJson } from 'utils/apiClient';

// 테스트 코드
const isActive = true;

const PostPage = () => {
  const { id } = useParams();
  const [postData, setAnswerData] = useState(null);

  const [isPending, hasError, fetchData] = useAsync(async () => {
    const { results } = await fetchClientJson({
      url: `subjects/${id}/questions/`,
      method: 'GET',
    });
    setAnswerData(results);
    return results;
  });

  useEffect(() => {
    fetchData();
  }, []);

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
      {postData?.length > 0 ? (
        <PostCardList postData={postData} />
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
