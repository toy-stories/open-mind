// import * as S from 'components/text/text.style.jsx';

// export const textType = {
//   H1: {
//     font: 'Actor',
//     size: '4rem',
//   },
//   H2: {
//     font: 'Actor',
//     size: '3.2rem',
//     height: '4rem',
//   },
//   H3: {
//     font: 'Actor',
//     size: '2.4rem',
//     height: '3rem',
//   },
//   Body1Reg: {
//     font: 'Pretendard',
//     size: '2rem',
//     height: '2.5rem',
//   },
//   Body1Bol: {
//     font: 'Actor',
//     size: '2rem',
//     height: '2.5rem',
//   },
//   Body2Reg: {
//     font: 'Pretendard',
//     size: '1.8rem',
//     height: '2.4rem',
//   },
//   Body2Bol: {
//     font: 'Actor',
//     size: '1.8rem',
//     height: '2.4rem',
//   },
//   Body3Reg: {
//     font: 'Pretendard',
//     size: '1.6rem',
//     height: '2.2rem',
//   },
//   Body3Bol: {
//     font: 'Actor',
//     size: '1.6rem',
//     height: '2.2rem',
//   },
//   Caption1Reg: {
//     font: 'Pretendard',
//     size: '1.4rem',
//     height: '1.8rem',
//   },
//   Caption1Med: {
//     font: 'Pretendard',
//     size: '1.4rem',
//     weight: '500',
//     height: '1.8rem',
//   },
//   Caption1Bol: {
//     font: 'Actor',
//     size: '1.4rem',
//     height: '1.8rem',
//   },
// };

// export const Text = ({ type, text }) => {
//   return <S.Text textType={S.textType[type]}>{text}</S.Text>;
// };
import styled from 'styled-components';

export const H1 = styled.h1`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: 4rem;
`;

export const H2 = styled.h2`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: 3.2rem;
  line-height: 4rem;
`;

export const H3 = styled.h3`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: 2.4rem;
  line-height: 3rem;
`;

export const Body1Reg = styled.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 2rem;
  line-height: 2.5rem;
`;

export const Body1Bol = styled.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: 2rem;
  line-height: 2.5rem;
`;

export const Body2Reg = styled.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 1.8rem;
  line-height: 2.4rem; /* 133.333% */
`;

export const Body2Bol = styled.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: 1.8rem;
  line-height: 2.4rem; /* 133.333% */
`;

export const Body3Reg = styled.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 1.6rem;
  line-height: 2.2rem;
`;

export const Body3Bol = styled.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: 1.6rem;
  line-height: 2.2rem;
`;

export const Caption1Reg = styled.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 1.4rem;
  line-height: 1.8rem;
`;

export const Caption1Med = styled.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
`;

export const Caption1Bol = styled.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: 1.4rem;
  line-height: 1.8rem;
`;
