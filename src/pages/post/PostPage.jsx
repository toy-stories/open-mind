import * as S from 'pages/post/postPage.style.jsx';
import { Text, TextType } from 'components/text/Text.jsx';
import logo from 'assets/images/logo.png';
import emptyImg from 'assets/images/no-question.png';
import ShareButtons from 'components/shareButtons/ShareButtons.jsx';
import { useCallback, useEffect, useRef, useState } from 'react';
import AnswerCardList from 'components/answerCards/AnswerCardList';

import QuestionCardList from 'components/postCards/QuestionCardList.jsx';
import QuestionModal from 'components/modal/modalContent/QuestionModal.jsx';
import useModal from 'hooks/useModal.js';
import { getNextPosts, getPosts } from 'pages/post/postPage.js';
import useObserver from 'hooks/useObserver';
import { Navigate, useParams, useLocation, Link } from 'react-router-dom';
import useAsync from 'hooks/useAsync';
import headerImage from 'assets/images/header-background.png';
import FloatingButton from 'components/floatingButton/FloatingButton';
import useKakaoShare from 'hooks/useKakaoShare';
import { KAKAO_SHARE_DATA } from 'utils/constants';

const PostPage = () => {
  const { subjectId } = useParams();
  const [questionInfo, setQuestionInfo] = useState(null);
  const location = useLocation();
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
    async (entries) => {
      if (isNextPending || !questionInfo || isNaN(questionInfo?.next)) return;

      for (const entry of entries) {
        if (entry.isIntersecting) {
          const result = await getNextPostsAsync(subjectId, questionInfo.next);
          if (!result) return;

          const { results, next } = result;
          const offset = next
            ? new URL(next).searchParams.get('offset')
            : questionInfo.offset;
          setQuestionInfo((prev) => ({
            ...prev,
            results: [...prev.results, ...results],
            next: Number(offset),
          }));
          break;
        }
      }
    },
    [getNextPostsAsync, isNextPending, questionInfo, subjectId],
  );

  useObserver(handleLoadMore, observerOptions, target);

  const handleLoad = useCallback(
    async (subjectId) => {
      const result = await getPostsAsync(subjectId);
      if (!result) return;
      const { questionsData, subjectData } = result;
      const offset = questionsData.next
        ? new URL(questionsData.next).searchParams.get('offset')
        : null;

      setQuestionInfo({ ...questionsData, next: Number(offset) });
      setSubjectOwner(subjectData);
    },
    [getPostsAsync],
  );

  const isAnswerPage = () => {
    return location.pathname === `/post/${subjectId}/answer`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    handleLoad(subjectId);
  }, [subjectId, handleLoad]);

  const { Modal, openModal, closeModal } = useModal();

  const { shareKakao } = useKakaoShare();

  const onClickKakaoShareButton = () => {
    shareKakao({
      title: KAKAO_SHARE_DATA.TITLE,
      description: subjectOwner?.name
        ? `${subjectOwner?.name}님의 질문 피드를 공유합니다.`
        : KAKAO_SHARE_DATA.DESCRIPTION,
      imageUrl: subjectOwner?.imageSource ?? KAKAO_SHARE_DATA.IMAGE_URL,
    });
  };

  if (hasError || nextHasError) return <Navigate to="/" />;

  if (hasError) return <Navigate to="/" />;
  return (
    <S.PostPageContainer>
      <S.HeaderImage src={headerImage} alt="헤더 배경 이미지" />

      <S.HeaderContainer>
        <Link to="/">
          <S.Logo src={logo} alt="오픈마인드 로고" />
        </Link>
        <S.ProfileImage
          src={subjectOwner?.imageSource}
          alt="유저 프로필 이미지"
        />
        <Text
          $normalType={TextType.H2}
          $mobileType={TextType.H3}
          text={subjectOwner?.name}
        />
        {subjectOwner !== {} && (
          <ShareButtons onClickKakaoShareButton={onClickKakaoShareButton} />
        )}
      </S.HeaderContainer>
      <S.CardListBox>
        {isAnswerPage() ? (
          questionInfo?.count ? (
            <AnswerCardList
              isPending={isPending || isNextPending}
              questionInfo={questionInfo}
              setQuestionInfo={setQuestionInfo}
              subjectOwner={subjectOwner}
            />
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
          )
        ) : questionInfo?.count ? (
          <QuestionCardList
            isPending={isPending || isNextPending}
            questionInfo={questionInfo}
            setQuestionInfo={setQuestionInfo}
            subjectOwner={subjectOwner}
            subjectId={subjectId}
            openModal={openModal}
          />
        ) : (
          <S.FeedCardsBox>
            <FloatingButton type="W" onClick={openModal} />
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
      </S.CardListBox>

      {!isAnswerPage() && (
        <Modal>
          <QuestionModal
            setQuestionInfo={setQuestionInfo}
            subjectOwner={subjectOwner}
            onClickClose={closeModal}
          />
        </Modal>
      )}
      <div ref={target} />
    </S.PostPageContainer>
  );
};

export default PostPage;
