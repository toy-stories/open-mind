import * as S from 'components/floatingButton/floatingButton.style.jsx';
import { useState, useEffect } from 'react';
import { Body1Bol } from 'components/text/Text.jsx';
import { RESPONSIBLE_SIZE } from 'utils/constants.js';

const FloatingButton = () => {
  const [isMobileSize, setIsMobileSize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mediaQuery = window.matchMedia(
        `(max-width: ${RESPONSIBLE_SIZE.mobile})`,
      );
      setIsMobileSize(mediaQuery.matches);
    };

    handleResize();

    const mediaQuery = window.matchMedia(
      `(max-width: ${RESPONSIBLE_SIZE.mobile})`,
    );
    mediaQuery.addListener(handleResize);

    return () => mediaQuery.removeListener(handleResize);
  }, []);

  return (
    <S.FloatingButton>
      {isMobileSize ? (
        <Body1Bol>질문 작성</Body1Bol>
      ) : (
        <Body1Bol>질문 작성하기</Body1Bol>
      )}
    </S.FloatingButton>
  );
};

export default FloatingButton;
