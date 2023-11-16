import { useEffect } from 'react';

const useKakaoShare = () => {
  const url = window.location.href;
  const shareKakao = ({ title, description, imageUrl }) => {
    if (window.Kakao) {
      const { Kakao } = window;
      if (!Kakao.isInitialized()) {
        Kakao.init(process.env.REACT_APP_KAKAO_SDK_KEY);
      }
      Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description,
          imageUrl,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        buttons: [
          {
            title,
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return { shareKakao };
};

export default useKakaoShare;
