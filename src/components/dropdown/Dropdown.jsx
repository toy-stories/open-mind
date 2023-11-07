import React, { useState } from 'react';
import * as S from 'components/dropdown/dropdown.style.jsx';
import { Caption1Med } from 'components/text/Text.jsx';

const SORT_OPTIONS = [
  { order: 'time', text: '최신순' },
  { order: 'name', text: '이름순' },
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOption, setSortOption] = useState(SORT_OPTIONS[0]);
  const handleSortOption = (option) => {
    setSortOption(option);
    setIsOpen(false);
  };
  return (
    <S.DropdownContainer>
      <S.DropdownButton onClick={() => setIsOpen((prev) => !prev)}>
        <Caption1Med>{sortOption.text}</Caption1Med>
        {isOpen ? <S.ArrowUpIcon /> : <S.ArrowDownIcon />}
      </S.DropdownButton>
      {isOpen && (
        <S.DropdownList>
          {SORT_OPTIONS.map((option, i) => (
            <li key={`${option}-${i}`}>
              <S.DropdownItem
                $isSelected={option.order === sortOption.order}
                onClick={() => handleSortOption(option)}
              >
                <Caption1Med>{option.text}</Caption1Med>
              </S.DropdownItem>
            </li>
          ))}
        </S.DropdownList>
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
