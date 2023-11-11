import React from 'react';
import * as S from 'components/pagination/pagination.style.jsx';
import { useNavigate } from 'react-router-dom';
const Pagination = ({ totalPages, isPending, showRange, currentPage }) => {
  const navigate = useNavigate();
  const handlePageClick = ({ selected }) => {
    navigate(`/list/${selected + 1}`);
  };

  return (
    totalPages > 0 && (
      <S.PaginationList
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={showRange}
        marginPagesDisplayed={1}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
        forcePage={currentPage}
        hideDisabled={true}
        hideNavigation={true}
        $isShow={!isPending}
      />
    )
  );
};

export default Pagination;
