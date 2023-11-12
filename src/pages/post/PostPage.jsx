import * as S from 'pages/post/postPage.style.jsx';
import { Text, TextType } from 'components/text/Text.jsx';
import headerImage from 'assets/images/header-background.png';
import logo from 'assets/images/logo.png';
import emptyImg from 'assets/images/no-question.png';
import ShareButtons from 'components/shareButtons/ShareButtons.jsx';
import FloatingButton from 'components/floatingButton/FloatingButton.jsx';
import PostCardList from 'components/postCards/PostCardList';
import { Navigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import useAsync from 'hooks/useAsync';
import { getPosts } from 'pages/post/postPage.js';

const PostPage = () => {
  const { subjectId } = useParams();
  const [questionInfo, setQuestionInfo] = useState(null);

  const [isPending, hasError, getPostsAsync] = useAsync(getPosts);
  const [subjectOwner, setSubjectOwner] = useState({});

  const handleLoad = useCallback(
    async (subjectId) => {
      const result = await getPostsAsync(subjectId);
      if (!result) return;
      const { questionsData, subjectData } = result;
      setQuestionInfo(questionsData);
      setSubjectOwner(subjectData);
    },
    [getPostsAsync],
  );

  useEffect(() => {
    handleLoad(subjectId);
  }, [subjectId, handleLoad]);

  if (hasError) return <Navigate to="/" />;
  return (
    <S.PostPageContainer>
      <S.HeaderImage src={headerImage} alt="헤더 배경 이미지" />
      <S.Logo src={logo} alt="오픈마인드 로고" />
      <S.HeaderUserProfile>
        <S.ProfileImage
          src={subjectOwner?.imageSource}
          alt="유저 프로필 이미지"
        />
        <S.UserIdText>
          <Text
            $normalType={TextType.H2}
            $mobileType={TextType.H3}
            text={subjectOwner?.name}
          />
        </S.UserIdText>
      </S.HeaderUserProfile>
      <ShareButtons />
      {questionInfo?.count ? (
        <S.PostCardListBox>
          <PostCardList
            questionInfo={questionInfo}
            subjectOwner={subjectOwner}
          />
        </S.PostCardListBox>
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
      <S.FloatingButtonItem>
        <FloatingButton type="W" />
      </S.FloatingButtonItem>
    </S.PostPageContainer>
  );
};

export default PostPage;
