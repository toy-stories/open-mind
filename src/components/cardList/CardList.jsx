import React, { useEffect, useState } from 'react';
import * as S from 'components/cardList/cardList.style.jsx';
import CardItem from 'components/cardItem/CardItem.jsx';
import { getSubjects } from './cardList.js';

const CardList = () => {
  const [subjects, setSubjects] = useState([]);
  const handleLoad = async () => {
    const { results } = await getSubjects();
    setSubjects(results);
  };
  useEffect(() => {
    handleLoad();
  }, []);
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
