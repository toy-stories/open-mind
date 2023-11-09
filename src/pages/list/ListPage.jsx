import logoImage from 'assets/images/logo.png';
import LinkButton from 'components/linkButton/LinkButton.jsx';
import Pagination from 'components/pagination/Pagination.jsx';
import Dropdown from 'components/dropdown/Dropdown.jsx';
import { getSubjects } from './listPage.js';
import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as S from 'pages/list/listPage.style.jsx';
import { H1 } from 'components/text/Text.jsx';
import useDebounce from 'hooks/useDebounce.js';
import CardItem from 'components/cardItem/CardItem.jsx';

const SORT_OPTIONS = [
  { sort: 'name', text: '이름순' },
  { sort: 'time', text: '최신순' },
];

// 테스트코드
const id = '1';
const type = 'Q';
const isActive = true;

const LinkButtonPath = id ? '/post' : '/';

const ListPage = () => {
  const [sortOption, setSortOption] = useState(SORT_OPTIONS[1]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const debouncedWindowWidth = useDebounce(windowWidth, 800);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth >= 768 ? 8 : 6,
  );
  const [totalPages, setTotalPages] = useState(1);
  const [subjects, setSubjects] = useState([]);
  const { page } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setItemsPerPage(debouncedWindowWidth >= 1199 ? 8 : 6);
  }, [debouncedWindowWidth]);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLoad = useCallback(async () => {
    setIsLoading(true);
    try {
      const { results, count } = await getSubjects({
        sort: sortOption.sort,
        page,
        limit: itemsPerPage,
      });
      setTotalPages(Math.ceil(count / itemsPerPage));
      setSubjects(results);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, [sortOption.sort, page, itemsPerPage]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);
  return (
    <S.ListPageContainer>
      <S.ListPage>
        <S.ListPageNav>
          <Link to="/">
            <S.LogoImage src={logoImage} alt="로고이미지" />
          </Link>
          <Link to={LinkButtonPath}>
            <LinkButton type={type} isActive={isActive} />
          </Link>
        </S.ListPageNav>
        <S.ListPageMain>
          <S.ListPageHeader>
            <H1>누구에게 질문할까요?</H1>
            <Dropdown
              sortOption={sortOption}
              setSortOption={setSortOption}
              SORT_OPTIONS={SORT_OPTIONS}
            />
          </S.ListPageHeader>
          <>
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
            <Pagination totalPages={totalPages} isShow={!isLoading} />
          </>
        </S.ListPageMain>
      </S.ListPage>
    </S.ListPageContainer>
  );
};
export default ListPage;
