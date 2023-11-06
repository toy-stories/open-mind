import React, { useState } from 'react';
import * as S from 'components/dropdown/dropdown.style.jsx';
import { Caption1Med } from 'components/text/Text';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.DropdownContainer>
      <S.DropdownButton onClick={() => setIsOpen((prev) => !prev)}>
        <Caption1Med>이름순</Caption1Med>
        {isOpen ? <S.ArrowUpIcon /> : <S.ArrowDownIcon />}
      </S.DropdownButton>
      {isOpen && (
        <S.DropdownList>
          <li>
            <S.DropdownItem>
              <Caption1Med>이름순</Caption1Med>
            </S.DropdownItem>
          </li>
          <li>
            <S.DropdownItem>
              <Caption1Med>최신순</Caption1Med>
            </S.DropdownItem>
          </li>
        </S.DropdownList>
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
