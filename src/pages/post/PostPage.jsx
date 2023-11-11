import * as S from 'pages/post/postPage.style.jsx';
import { Text, TextType } from 'components/text/Text.jsx';
import headerImage from 'assets/images/header-background.png';
import logo from 'assets/images/logo.png';
import defaultProfileImage from 'assets/images/default-profile-image.png';
import emptyImg from 'assets/images/no-question.png';
import ShareButtons from 'components/shareButtons/ShareButtons.jsx';
import FloatingButton from 'components/floatingButton/FloatingButton.jsx';
import PostCardList from 'components/postCards/PostCardList';
import QuestionModal from 'components/modal/modalContent/QuestionModal.jsx';
import useModal from 'hooks/useModal.js';
import EditButton from 'components/editButton/EditButton';
import QnaForm from 'components/qnaForm/QnaForm';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAsync from 'hooks/useAsync';
import { fetchClientJson } from 'utils/apiClient';

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

  const { Modal, openModal, closeModal } = useModal();
  return (
    <S.PostPageContainer>
      <S.HeaderImage src={headerImage} alt="헤더 배경 이미지" />
      <S.Logo src={logo} alt="오픈마인드 로고" />
      <S.HeaderUserProfile>
        <S.ProfileImage src={defaultProfileImage} alt="유저 프로필 이미지" />
        <S.UserIdText>
          <Text
            $normalType={TextType.H2}
            $mobileType={TextType.H3}
            text="아초는 고양이"
          />
        </S.UserIdText>
      </S.HeaderUserProfile>
      <ShareButtons />
      {postData?.length > 0 ? (
        <S.PostCardListBox>
          <PostCardList postData={postData} />
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
      <>
        <S.FloatingButtonItem>
        <FloatingButton type="W" onClick={openModal}/>
      </S.FloatingButtonItem>
        <Modal>
          <QuestionModal onClickClose={closeModal} />
        </Modal>
      </>
      {/* <EditButton isActive={isActive} /> */}
    </S.PostPageContainer>
  );
};

export default PostPage;
