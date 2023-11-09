import * as S from 'components/text/text.style.jsx';

export const textType = {
  H1: {
    font: 'Actor',
    size: '4rem',
  },
  H2: {
    font: 'Actor',
    size: '3.2rem',
    height: '4rem',
  },
  H3: {
    font: 'Actor',
    size: '2.4rem',
    height: '3rem',
  },
  Body1Reg: {
    font: 'Pretendard',
    size: '2rem',
    height: '2.5rem',
  },
  Body1Bol: {
    font: 'Actor',
    size: '2rem',
    height: '2.5rem',
  },
  Body2Reg: {
    font: 'Pretendard',
    size: '1.8rem',
    height: '2.4rem',
  },
  Body2Bol: {
    font: 'Actor',
    size: '1.8rem',
    height: '2.4rem',
  },
  Body3Reg: {
    font: 'Pretendard',
    size: '1.6rem',
    height: '2.2rem',
  },
  Body3Bol: {
    font: 'Actor',
    size: '1.6rem',
    height: '2.2rem',
  },
  Caption1Reg: {
    font: 'Pretendard',
    size: '1.4rem',
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
    height: '1.8rem',
  },
};

export const Text = ({ type, text }) => {
  return <S.Text textType={textType[type]}>{text}</S.Text>;
};

export default Text;
