import React from 'react';
import * as S from 'components/pagination/pagination.style.jsx';
import { Body1Bol } from 'components/text/Text.jsx';
const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Pagination = () => {
  return (
    <S.PaginationList>
      {sample.map((s) => (
        <li key={s}>
          <S.PaginationItem to={`/list/${s}`}>
            <Body1Bol>{s}</Body1Bol>
          </S.PaginationItem>
        </li>
      ))}
    </S.PaginationList>
  );
};

export default Pagination;
