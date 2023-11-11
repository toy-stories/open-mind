import { Text, TextType } from 'components/text/Text.jsx';
import * as S from './QuestionCards.style.jsx';
import QuestionCardItem from './QuestionCardItem.jsx';

const PostCardList = ({ postData, id }) => {
  return (
    <S.PostCardList>
      <S.PostCardListTitleBox>
        <S.SpeechBubble />
        <Text
          $normalType={TextType.Body1Bol}
          $mobileType={TextType.Body2Bol}
          text={`${
            postData?.length > 0 && postData?.length
          }개의 질문이 있습니다.`}
        />
      </S.PostCardListTitleBox>
      {postData?.length > 0 &&
        postData.map((data) => (
          <QuestionCardItem id={id} postData={data} key={data.id} />
        ))}
    </S.PostCardList>
  );
};

export default PostCardList;
