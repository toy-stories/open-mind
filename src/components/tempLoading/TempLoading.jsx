import React from 'react';
import * as S from 'components/tempLoading/tempLoading.style.jsx';

const LoadingSpinner = () => {
  return (
    <S.SpinnerWrap>
      <S.Spinner>😱</S.Spinner>
    </S.SpinnerWrap>
  );
};

export default LoadingSpinner;
