import { Text, TextType } from 'components/text/Text.jsx';
import * as S from './QuestionCards.style.jsx';
import QuestionCardItem from './QuestionCardItem.jsx';
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
        <Text
          $normalType={TextType.Body1Bol}
          $mobileType={TextType.Body2Bol}
          text={`${
            answerData?.length > 0 && answerData?.length
          }개의 질문이 있습니다.`}
        />
      </S.PostCardListTitleBox>
      {answerData?.length > 0 &&
        answerData.map((data) => (
          <QuestionCardItem data={data} key={data.id} />
        ))}
    </S.PostCardList>
  );
};

export default PostCardList;
