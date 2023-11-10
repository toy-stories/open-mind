import { Text, TextType } from 'components/text/Text.jsx';
import * as S from './postCards.style.jsx';
import PostCardItem from './PostCardItem.jsx';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.locale('ko');
dayjs.extend(relativeTime);

const PostCardList = () => {
  // 추후 프롭스로 데이터 받기
  // 테스트코드
  const createdAtQuestion = dayjs('2023-10-10 10:30:25', 'YYYY-MM-DD HH:mm:ss');
  createdAtQuestion.format();
  const updateTimeAgoQuestion = dayjs(createdAtQuestion).fromNow();
  const createdAtAnswer = dayjs('2023-11-7 10:30:25', 'YYYY-MM-DD HH:mm:ss');
  createdAtAnswer.format();
  const updateTimeAgoAnswer = dayjs(createdAtAnswer).fromNow();

  const testData = [
    {
      id: '1',
      isAnswered: true,
      title: '좋아하는 동물은?',
      userName: '아초는 고양이',
      content:
        '그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다. 찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를 청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에 피어나는 간에 밝은 이상, 인생의 만물은 피다. 대중을 이성은 방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며, 말이다. 이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에 있음으로써 꽃 보배를 곧 가는 교향악이다. 우는 새 예가 우리의 것은 피다. 피가 그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지 것이다. 있는 봄바람을 방황하여도, 우리의 것은 작고 아니한 영원히 듣기만 운다.',
      updateTimeAgoQuestion,
      updateTimeAgoAnswer,
    },
    {
      id: '2',
      isAnswered: false,
      title: '좋아하는 동물은?',
      userName: '아초는 고양이',
      content: null,
      updateTimeAgoQuestion,
      updateTimeAgoAnswer,
    },
    {
      id: '3',
      isAnswered: true,
      title: '좋아하는 동물은?',
      userName: '아초는 고양이',
      content: '거절',
      updateTimeAgoQuestion,
      updateTimeAgoAnswer,
    },
  ];

  return (
    <S.PostCardList>
      <S.PostCardListTitleBox>
        <S.SpeechBubble />
        <Text
          $normalType={TextType.Body1Bol}
          $mobileType={TextType.Body2Bol}
          text={`${testData.length}개의 질문이 있습니다.`}
        />
      </S.PostCardListTitleBox>
      {testData.length > 0 &&
        testData.map((data, idx) => (
          <PostCardItem testData={data} key={testData[idx].id} />
        ))}
    </S.PostCardList>
  );
};

export default PostCardList;
