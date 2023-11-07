import React from 'react';
import * as S from 'components/pagination/pagination.style.jsx';
import { useNavigate, useParams } from 'react-router-dom';
const Pagination = ({ totalPages, isShow }) => {
  const navigate = useNavigate();
  const { page } = useParams();
  if (!totalPages) return;

  const currentPage = Number(page) || 1;
  const handlePageClick = ({ selected }) => {
    navigate(`/list/${selected + 1}`);
  };

  return (
    <S.PaginationList
      breakLabel="..."
      onPageChange={handlePageClick}
      pageRangeDisplayed={6}
      marginPagesDisplayed={1}
      pageCount={totalPages}
      renderOnZeroPageCount={null}
      forcePage={currentPage - 1}
      hideDisabled={true}
      hideNavigation={true}
      $isShow={isShow}
    />
  );
};

export default Pagination;
