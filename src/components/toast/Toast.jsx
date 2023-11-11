import * as S from 'components/toast/toast.style.jsx';
import { Text, TextType } from 'components/text/Text.jsx';

const Toast = () => {
  return (
    <S.ToastBox>
      <Text $normalType={TextType.Caption1Med} text="URL이 복사되었습니다." />
    </S.ToastBox>
  );
};

export default Toast;
