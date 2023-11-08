import * as S from 'components/shareButtons/shareButtons.style.jsx';
import shareLinkIcon from 'assets/icons/share-link.png';
import shareKakaoIcon from 'assets/icons/share-kakao.png';
import shareFacebookIcon from 'assets/icons/share-facebook.png';

const ShareButtons = () => {
  return (
    <S.ShareButtons>
      <S.ShareButton src={shareLinkIcon} alt="링크 공유하기" />
      <S.ShareButton src={shareKakaoIcon} alt="카카오 공유하기" />
      <S.ShareButton src={shareFacebookIcon} alt="페이스북 공유하기" />
    </S.ShareButtons>
  );
};

export default ShareButtons;
