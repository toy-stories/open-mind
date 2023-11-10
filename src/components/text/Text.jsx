import * as S from 'components/text/text.style.jsx';

export const TextType = {
  H1: {
    font: 'Actor',
    size: '4rem',
    weight: '400',
    height: 'normal',
  },
  H2: {
    font: 'Actor',
    size: '3.2rem',
    weight: '400',
    height: '4rem',
  },
  H3: {
    font: 'Actor',
    size: '2.4rem',
    weight: '400',
    height: '3rem',
  },
  Body1Reg: {
    font: 'Pretendard',
    size: '2rem',
    weight: '400',
    height: '2.5rem',
  },
  Body1Bol: {
    font: 'Actor',
    size: '2rem',
    weight: '400',
    height: '2.5rem',
  },
  Body2Reg: {
    font: 'Pretendard',
    size: '1.8rem',
    weight: '400',
    height: '2.4rem',
  },
  Body2Bol: {
    font: 'Actor',
    size: '1.8rem',
    weight: '400',
    height: '2.4rem',
  },
  Body3Reg: {
    font: 'Pretendard',
    size: '1.6rem',
    weight: '400',
    height: '2.2rem',
  },
  Body3Bol: {
    font: 'Actor',
    size: '1.6rem',
    weight: '400',
    height: '2.2rem',
  },
  Caption1Reg: {
    font: 'Pretendard',
    size: '1.4rem',
    weight: '400',
    height: '1.8rem',
  },
  Caption1Med: {
    font: 'Pretendard',
    size: '1.4rem',
    weight: '500',
    height: '1.8rem',
  },
  Caption1Bol: {
    font: 'Actor',
    size: '1.4rem',
    weight: '400',
    height: '1.8rem',
  },
};

export const Text = ({ $normalType, $mobileType, text }) => {
  return (
    <S.Text $normalType={$normalType} $mobileType={$mobileType}>
      {text}
    </S.Text>
  );
};

export default Text;
