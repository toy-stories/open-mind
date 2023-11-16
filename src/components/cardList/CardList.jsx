import * as S from 'components/cardList/cardList.style.jsx';
import CardItem from 'components/cardItem/CardItem.jsx';
import { Link } from 'react-router-dom';

const CardList = ({ subjects, isPending }) => {
  return (
    <S.CardList>
      {subjects?.map((subject) => (
        <li key={subject.id}>
          <Link to={`/post/${subject.id}`}>
            <CardItem subject={subject} isPending={isPending} />
          </Link>
        </li>
      ))}
    </S.CardList>
  );
};

export default CardList;
