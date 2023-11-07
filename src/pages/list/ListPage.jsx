import logoImage from 'assets/images/logo.png';
import LinkButton from 'components/linkButton/LinkButton.jsx';
import { styled } from 'styled-components';
import Pagination from 'components/pagination/Pagination';
import CardList from 'components/cardList/CardList.jsx';
import Dropdown from 'components/dropdown/Dropdown.jsx';
import { getSubjects } from './listPage.js';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as S from 'pages/list/listPage.style.jsx';
import { H1 } from 'components/text/Text.jsx';
import LoadingSpinner from 'components/tempLoading/TempLoading.jsx';
const LogoImage = styled.img`
  width: 146px;
  height: 57px;
`;
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
  const [paginationInfo, setPaginationInfo] = useState({});
  const [subjects, setSubjects] = useState([]);
  const { page } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const handleLoad = async (sort, page) => {
    setIsLoading(true);
    const { results, count, next, previous } = await getSubjects({
      sort: sort,
      page: page,
    });
    setPaginationInfo({ count, next, previous });
    setSubjects(results);
    setIsLoading(false);
  };

  useEffect(() => {
    handleLoad(sortOption.sort, page);
  }, [sortOption, page]);
  return (
    <S.ListPageContainer>
      <S.ListPage>
        <S.ListPageNav>
          <Link to="/">
            <LogoImage src={logoImage} alt="로고이미지" />
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
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <CardList subjects={subjects} />
              <Pagination paginationInfo={paginationInfo} />
            </>
          )}
        </S.ListPageMain>
      </S.ListPage>
    </S.ListPageContainer>
  );
};
export default ListPage;
