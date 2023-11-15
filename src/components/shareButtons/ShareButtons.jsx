import React, { useState, useEffect } from 'react';
import * as S from 'components/shareButtons/shareButtons.style.jsx';
import shareLinkIcon from 'assets/icons/share-link.png';
import shareKakaoIcon from 'assets/icons/share-kakao.png';
import shareFacebookIcon from 'assets/icons/share-facebook.png';
import Toast from 'components/toast/Toast.jsx';

const ShareButtons = ({ subjectOwner }) => {
  const [showToast, setShowToast] = useState(false);

  const copyUrlToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setShowToast(true); // 토스트 보여주기
      })
      .catch((err) => {
        console.error('클립보드 복사에 실패했습니다.', err);
      });
  };
  const shareLink = `${window.location.origin}/post/${subjectOwner.id}`;
  const handleFacebookClick = () =>
    window.open(`http://www.facebook.com/sharer.php?u=${shareLink}`);

  useEffect(() => {
    let timer;
    if (showToast) {
      timer = setTimeout(() => {
        setShowToast(false); // 5초 후 토스트 숨기기
      }, 5000);
    }
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, [showToast]);

  return (
    <S.ShareButtons>
      <S.ShareButton
        src={shareLinkIcon}
        alt="링크 공유하기"
        onClick={copyUrlToClipboard}
      />
      <S.ShareButton src={shareKakaoIcon} alt="카카오 공유하기" />
      <S.ShareButton
        src={shareFacebookIcon}
        alt="페이스북 공유하기"
        onClick={handleFacebookClick}
      />
      {showToast && <Toast text="URL이 복사되었습니다." />}
    </S.ShareButtons>
  );
};

export default ShareButtons;
