import * as S from 'pages/post/postPage.style.jsx';
import { Text, TextType } from 'components/text/Text.jsx';
import headerImage from 'assets/images/header-background.png';
import logo from 'assets/images/logo.png';
import emptyImg from 'assets/images/no-question.png';
import ShareButtons from 'components/shareButtons/ShareButtons.jsx';
import FloatingButton from 'components/floatingButton/FloatingButton.jsx';
import PostCardList from 'components/postCards/PostCardList';
import { Navigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
import useAsync from 'hooks/useAsync';
import { getNextPosts, getPosts } from 'pages/post/postPage.js';
import useObserver from 'hooks/useObserver';

const PostPage = () => {
  const { subjectId } = useParams();
  const [questionInfo, setQuestionInfo] = useState(null);

  const [isPending, hasError, getPostsAsync] = useAsync(getPosts);
  const [isNextPending, nextHasError, getNextPostsAsync] =
    useAsync(getNextPosts);
  const [subjectOwner, setSubjectOwner] = useState({});

  const target = useRef(null);

  const observerOptions = {
    root: null,
    rootMargin: '200px',
    threshold: 1.0,
  };

  const handleLoadMore = useCallback(
    async (entries, observer) => {
      if (isNextPending || !questionInfo) return;

      for (const entry of entries) {
        if (entry.isIntersecting && questionInfo?.next) {
          const nextQuery = questionInfo.next.slice(
            questionInfo.next.indexOf('/subjects') + 1,
          );
          const result = await getNextPostsAsync(nextQuery);
          if (!result) return;

          const { results, next } = result;
          setQuestionInfo((prev) => ({
            ...prev,
            results: [...prev.results, ...results],
            next: next,
          }));
          break;
        }
      }
    },
    [getNextPostsAsync, isNextPending, questionInfo],
  );

  useObserver(handleLoadMore, observerOptions, target);
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
    window.scrollTo(0, 0);
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
            isPending={isPending || isNextPending}
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
      <div ref={target} />
    </S.PostPageContainer>
  );
};

export default PostPage;
