import * as S from 'components/cardList/cardList.style.jsx';
import CardItem from 'components/cardItem/CardItem.jsx';
import { Link } from 'react-router-dom';

const CardList = ({ subjects, itemsPerPage }) => {
  return (
    <S.CardList>
      {subjects?.map((subject, i) => (
        <li key={subject.id}>
          <Link to={`/post/${subject.id}`}>
            <CardItem
              id={subject.id}
              name={subject.name}
              imageSource={subject.imageSource}
              questionCount={subject.questionCount}
              isShow={itemsPerPage > i}
            />
          </Link>
        </li>
      ))}
    </S.CardList>
  );
};

export default CardList;
