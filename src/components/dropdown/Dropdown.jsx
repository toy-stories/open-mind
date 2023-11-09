import React, { useState } from 'react';
import * as S from 'components/dropdown/dropdown.style.jsx';
import { Text, textType } from 'components/text/Text.jsx';
import { useNavigate } from 'react-router-dom';

const Dropdown = ({ sortOption, setSortOption, SORT_OPTIONS, isLoading }) => {
  const navigate = useNavigate();
  const handleSortOption = (option) => {
    setSortOption(option);
    setIsOpen(false);
    navigate('/list/1');
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.DropdownContainer $isLoading={isLoading}>
      <S.DropdownButton
        $isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Text type={textType.Caption1Med} text={sortOption.text} />
        {isOpen ? <S.ArrowUpIcon /> : <S.ArrowDownIcon />}
      </S.DropdownButton>
      {isOpen && (
        <S.DropdownList>
          {SORT_OPTIONS?.map((option, i) => (
            <li key={`${option}-${i}`}>
              <S.DropdownItem
                $isSelected={option.sort === sortOption.sort}
                onClick={() => handleSortOption(option)}
              >
                <Text type={textType.Caption1Med} text={option.text} />
              </S.DropdownItem>
            </li>
          ))}
        </S.DropdownList>
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
