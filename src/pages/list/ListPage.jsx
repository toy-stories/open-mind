import logoImage from 'assets/images/logo.png';
import LinkButton from 'components/linkButton/LinkButton.jsx';
import Pagination from 'components/pagination/Pagination.jsx';
import Dropdown from 'components/dropdown/Dropdown.jsx';
import { getSubjects } from 'pages/list/listPage.js';
import { useCallback, useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import * as S from 'pages/list/listPage.style.jsx';
import { Text, TextType } from 'components/text/Text.jsx';
import useDebounce from 'hooks/useDebounce.js';
import CardList from 'components/cardList/CardList.jsx';
import useAsync from 'hooks/useAsync.js';

const SORT_OPTIONS = [
  { sort: 'name', text: '이름순' },
  { sort: 'time', text: '최신순' },
];

const ListPage = () => {
  const [sortOption, setSortOption] = useState(SORT_OPTIONS[1]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const debouncedWindowWidth = useDebounce(windowWidth, 800);
  const [itemsPerPage, setItemsPerPage] = useState(
    debouncedWindowWidth >= 1199 ? 8 : 6,
  );
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem('userId')) || null,
  );
  const LinkButtonPath = userId ? `/post/${userId}/answer` : '/';

  const [totalPages, setTotalPages] = useState(0);
  const [subjects, setSubjects] = useState([]);
  const { page = 1 } = useParams();

  useEffect(() => {
    setItemsPerPage(debouncedWindowWidth >= 1199 ? 8 : 6);
  }, [debouncedWindowWidth]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [isPending, hasError, getSubjectsAsync] = useAsync(getSubjects);

  const handleLoad = useCallback(
    async (sort, page, limit) => {
      const result = await getSubjectsAsync({
        sort: sort,
        page: page,
        limit: limit,
      });
      if (!result) return;
      const { results, count } = result;
      setTotalPages(Math.ceil(count / itemsPerPage));
      setSubjects(results);
    },
    [getSubjectsAsync, itemsPerPage],
  );

  useEffect(() => {
    handleLoad(sortOption.sort, page, itemsPerPage);
  }, [sortOption, itemsPerPage, handleLoad, page]);

  if (hasError) return <Navigate to="/" />;
  if (isNaN(page)) return <Navigate to="/list/1" />;
  if (totalPages && !subjects.length)
    return <Navigate to={`/list/${totalPages}`} />;

  return (
    <S.ListPageContainer>
      <S.ListPage>
        <S.ListPageNav>
          <Link to="/">
            <S.LogoImage src={logoImage} alt="로고이미지" />
          </Link>
          <Link to={LinkButtonPath}>
            <LinkButton type="A" isActive={true} />
          </Link>
        </S.ListPageNav>
        <S.ListPageMain>
          <S.ListPageHeader>
            <Text
              $normalType={TextType.H1}
              $mobileType={TextType.H3}
              text="누구에게 질문할까요?"
            />
            <Dropdown
              sortOption={sortOption}
              setSortOption={setSortOption}
              SORT_OPTIONS={SORT_OPTIONS}
              isPending={isPending}
            />
          </S.ListPageHeader>
          <CardList
            userId={userId}
            subjects={subjects}
            itemsPerPage={itemsPerPage}
            isPending={isPending}
          />
          <Pagination
            totalPages={totalPages}
            isPending={isPending}
            showRange={itemsPerPage - 1}
            currentPage={page - 1}
          />
        </S.ListPageMain>
      </S.ListPage>
    </S.ListPageContainer>
  );
};
export default ListPage;
