import { Body2Bol, Body3Reg, Caption1Med } from 'components/text/Text';
import * as S from './postCards.style';
import { useState } from 'react';
import userIconImage from 'assets/images/default-profile-image.png';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
dayjs.locale('ko');
dayjs.extend(relativeTime);

const PostCardItem = () => {
  // 테스트코드
  const testData = {
    isAnswered: true,
    title: '좋아하는 동물은?',
    userName: '아초는 고양이',
    content:
      '그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다. 찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를 청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에 피어나는 간에 밝은 이상, 인생의 만물은 피다. 대중을 이성은 방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며, 말이다. 이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에 있음으로써 꽃 보배를 곧 가는 교향악이다. 우는 새 예가 우리의 것은 피다. 피가 그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지 것이다. 있는 봄바람을 방황하여도, 우리의 것은 작고 아니한 영원히 듣기만 운다.',
  };
  const createdAtQuestion = dayjs('2023-10-10 10:30:25', 'YYYY-MM-DD HH:mm:ss');
  createdAtQuestion.format();
  const updateTimeAgoQuestion = dayjs(createdAtQuestion).fromNow();
  const createdAtAnswer = dayjs('2023-11-7 10:30:25', 'YYYY-MM-DD HH:mm:ss');
  createdAtAnswer.format();
  const updateTimeAgoAnswer = dayjs(createdAtAnswer).fromNow();
  // 테스트 코드 끝

  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [dislike, setDislike] = useState(false);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLikeClick = () => {
    setLike(true);
    setLikeCount((prev) => prev + 1);
  };

  const handleDislikeClick = () => {
    setDislike(true);
    setDislikeCount((prev) => prev + 1);
  };

  return (
    <S.PostCardBox>
      <S.AnswerCheckBox $isAnswered={testData.isAnswered}>
        <Caption1Med>{testData.isAnswered ? '답변완료' : '미답변'}</Caption1Med>
      </S.AnswerCheckBox>

      <S.TitleBox>
        <S.UpdateTimeBox>
          <Caption1Med>질문 · {updateTimeAgoQuestion}</Caption1Med>
        </S.UpdateTimeBox>
        <Body2Bol>{testData.title}</Body2Bol>
      </S.TitleBox>

      <S.ContentBox>
        <S.ProfileImage src={userIconImage} alt="유저 아이콘 이미지" />
        <S.ContentTextBox>
          <S.ContentUserInfoBox>
            <Body2Bol>{testData.userName}</Body2Bol>
            <S.UpdateTimeBox>
              <Caption1Med>{updateTimeAgoAnswer}</Caption1Med>
            </S.UpdateTimeBox>
          </S.ContentUserInfoBox>
          {testData.content ? (
            <Body3Reg>{testData.content}</Body3Reg>
          ) : (
            <S.RefuseAnswerBox>
              <Body3Reg>답변 거절</Body3Reg>
            </S.RefuseAnswerBox>
          )}
        </S.ContentTextBox>
      </S.ContentBox>

      <S.LikeButtonBox>
        <S.LikeButton like={like} onClick={handleLikeClick}>
          <S.LikeImage like={like} />
          좋아요 {likeCount}
        </S.LikeButton>
        <S.DislikeButton dislike={dislike} onClick={handleDislikeClick}>
          <S.DisLikeImage dislike={dislike} />
          싫어요 {dislikeCount}
        </S.DislikeButton>
      </S.LikeButtonBox>
    </S.PostCardBox>
  );
};

export default PostCardItem;
