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
      <S.HeaderContainer>
        <S.Header>
          <S.Logo src={logo} alt="오픈마인드 로고" />
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
          <ShareButtons />
        </S.Header>
      </S.HeaderContainer>

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
        <Modal>
          <QuestionModal onClickClose={closeModal} />
        </Modal>
      </>
      <S.FloatingButtonItem>
        <FloatingButton type="W" onClick={openModal} />
      </S.FloatingButtonItem>
    </S.PostPageContainer>
  );
};

export default PostPage;
