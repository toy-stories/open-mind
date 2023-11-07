import React, { useState } from 'react';
import * as S from 'components/dropdown/dropdown.style.jsx';
import { Caption1Med } from 'components/text/Text.jsx';
import { useNavigate } from 'react-router-dom';
import arrowUpIcon from 'assets/icons/Arrow-up.svg';
import arrowDownIcon from 'assets/icons/Arrow-down.svg';
const Dropdown = ({ sortOption, setSortOption, SORT_OPTIONS }) => {
  const navigate = useNavigate();
  const handleSortOption = (option) => {
    setSortOption(option);
    setIsOpen(false);
    navigate('/list/1');
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.DropdownContainer>
      <S.DropdownButton onClick={() => setIsOpen((prev) => !prev)}>
        <Caption1Med>{sortOption.text}</Caption1Med>
        <S.ArrowIcon src={isOpen ? arrowUpIcon : arrowDownIcon} />
      </S.DropdownButton>
      {isOpen && (
        <S.DropdownList>
          {SORT_OPTIONS?.map((option, i) => (
            <li key={`${option}-${i}`}>
              <S.DropdownItem
                $isSelected={option.sort === sortOption.sort}
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
