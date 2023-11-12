import * as S from 'components/toast/toast.style.jsx';
import { Text, TextType } from 'components/text/Text.jsx';

const Toast = ({ text }) => {
  return (
    <S.ToastBox>
      <Text $normalType={TextType.Caption1Med} text={text} />
    </S.ToastBox>
  );
};

export default Toast;
