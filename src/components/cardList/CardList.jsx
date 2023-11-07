import * as S from 'components/cardList/cardList.style.jsx';
import CardItem from 'components/cardItem/CardItem.jsx';

const CardList = ({ subjects }) => {
  return (
    <S.CardList>
      {subjects?.map((subject) => (
        <li key={subject.id}>
          <CardItem
            name={subject.name}
            imageSource={subject.imageSource}
            questionCount={subject.questionCount}
          />
        </li>
      ))}
    </S.CardList>
  );
};

export default CardList;
