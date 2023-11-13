import * as S from 'pages/post/postPage.style.jsx';
import { Text, TextType } from 'components/text/Text.jsx';
import headerImage from 'assets/images/header-background.png';
import logo from 'assets/images/logo.png';
import emptyImg from 'assets/images/no-question.png';
import ShareButtons from 'components/shareButtons/ShareButtons.jsx';
import FloatingButton from 'components/floatingButton/FloatingButton.jsx';
import QuestionCardList from 'components/postCards/QuestionCardList.jsx';
import AnswerCardList from 'components/answerCards/AnswerCardList.jsx';
import QuestionModal from 'components/modal/modalContent/QuestionModal.jsx';
import useModal from 'hooks/useModal.js';
import { Navigate, useParams, useLocation } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import useAsync from 'hooks/useAsync';
import { getPosts } from 'pages/post/postPage.js';
import { fetchClient } from 'utils/apiClient';

const PostPage = () => {
  const { subjectId } = useParams();
  const [questionInfo, setQuestionInfo] = useState(null);
  const location = useLocation();
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

  const handleDeleteId = async () => {
    if (
      window.confirm(
        `[주의] 계정 삭제는 복구할 수 없으며, 모든 데이터가 영구적으로 제거됩니다.
        계속하시겠습니까?`,
      )
    ) {
      await fetchClient({
        url: `subjects/${subjectId}/`,
        method: 'DELETE',
      });
      localStorage.removeItem('userId');
      alert('계정이 삭제되었습니다. 메인페이지로 돌아갑니다.');
      window.location.replace('/');
    }
  };

  const isAnswerPage = () => {
    return location.pathname === `/post/${subjectId}/answer`;
  };

  useEffect(() => {
    handleLoad(subjectId);
  }, [subjectId, handleLoad]);

  const { Modal, openModal, closeModal } = useModal();
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
      {isAnswerPage() && (
        <S.FloatingButtonItem>
          <FloatingButton type="D" onClick={handleDeleteId} />
        </S.FloatingButtonItem>
      )}
      {isAnswerPage() ? (
        questionInfo?.count ? (
          <S.CardListBox>
            <AnswerCardList
              questionInfo={questionInfo}
              subjectOwner={subjectOwner}
            />
          </S.CardListBox>
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
        <S.CardListBox>
          <QuestionCardList
            questionInfo={questionInfo}
            subjectOwner={subjectOwner}
          />
        </S.CardListBox>
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
      <>
        {!isAnswerPage() && (
          <S.FloatingButtonItem>
            <FloatingButton type="W" onClick={openModal} />
          </S.FloatingButtonItem>
        )}

        {!isAnswerPage() && (
          <Modal>
            <QuestionModal onClickClose={closeModal} />
          </Modal>
        )}
      </>
    </S.PostPageContainer>
  );
};

export default PostPage;
