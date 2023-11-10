import { Body1Bol } from 'components/text/Text.jsx';
import * as S from './QuestionCards.style.jsx';
import PostCardItem from './QuestionCardItem.jsx';
import { useEffect, useState } from 'react';
import useAsync from 'hooks/useAsync.js';
import { fetchClientJson } from 'utils/apiClient.js';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.locale('ko');
dayjs.extend(relativeTime);

const PostCardList = () => {
  // 추후 프롭스로 데이터 받기

  const [answerData, setAnswerData] = useState(null);

  const [isPending, hasError, fetchData] = useAsync(async () => {
    const { results } = await fetchClientJson({
      url: 'subjects/158/questions/',
      method: 'GET',
    });
    setAnswerData(results);
    return results;
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.PostCardList>
      <S.PostCardListTitleBox>
        <S.SpeechBubble />
        <Body1Bol>{answerData?.length}개의 질문이 있습니다.</Body1Bol>
      </S.PostCardListTitleBox>
      {answerData?.length > 0 &&
        answerData.map((data) => <PostCardItem data={data} key={data.id} />)}
    </S.PostCardList>
  );
};

export default PostCardList;
