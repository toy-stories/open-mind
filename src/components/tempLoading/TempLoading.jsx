import React from 'react';
import * as S from 'components/tempLoading/tempLoading.style.jsx';
import spinnerGif from 'assets/icons/Ellipsis-200px.gif';

const LoadingSpinner = () => {
  return (
    <S.SpinnerWrap>
      <S.Spinner src={spinnerGif} alt="로딩중" />
    </S.SpinnerWrap>
  );
};

export default LoadingSpinner;
