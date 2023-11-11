import { Text, TextType } from 'components/text/Text.jsx';
import * as S from './QuestionCards.style.jsx';
import QuestionCardItem from './QuestionCardItem.jsx';

const PostCardList = ({ questions, subjectOwner }) => {
  const { results: posts, count } = questions;
  return (
    <S.PostCardList>
      <S.PostCardListTitleBox>
        <S.SpeechBubble />
        <Text
          $normalType={TextType.Body1Bol}
          $mobileType={TextType.Body2Bol}
          text={`${count}개의 질문이 있습니다.`}
        />
      </S.PostCardListTitleBox>
      {posts?.map((post) => (
        <QuestionCardItem
          postData={post}
          key={post.id}
          subjectOwner={subjectOwner}
        />
      ))}
    </S.PostCardList>
  );
};

export default PostCardList;
