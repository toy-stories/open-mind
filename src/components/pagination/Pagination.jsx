import React from 'react';
import * as S from 'components/pagination/pagination.style.jsx';
import { useNavigate, useParams } from 'react-router-dom';
const Pagination = ({ paginationInfo }) => {
  const navigate = useNavigate();
  const { page } = useParams();
  if (!paginationInfo?.count) return;
  const pageCount = Math.ceil(+paginationInfo.count / 8);
  const currentPage = Number(page) || 1;
  const handlePageClick = ({ selected }) => {
    navigate(`/list/${selected + 1}`);
  };

  return (
    <S.PaginationList
      breakLabel="..."
      nextLabel={null}
      onPageChange={handlePageClick}
      pageRangeDisplayed={6}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      previousLabel={null}
      renderOnZeroPageCount={null}
      forcePage={currentPage - 1}
      prevRel={null}
      nextRel={null}
      prevPageRel={null}
      nextPageRel={null}
      hideDisabled={true}
      hideNavigation={true}
    />
  );
};

export default Pagination;
