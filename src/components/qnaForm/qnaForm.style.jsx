import styled, { css } from 'styled-components';
import COLORS from 'utils/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 18.6rem;
  margin-top: 0.4rem;
  margin-bottom: 0.8rem;
  padding: 1.6rem;
  border: 1px solid transparent;
  border-radius: 8px;
  background: ${COLORS.GRAY20};
  color: ${COLORS.GRAY40};
  resize: none;
  outline: none;

  &:focus {
    border: 1px solid ${COLORS.BROWN40};
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  height: 4.6rem;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: ${COLORS.BROWN30};
  color: ${COLORS.WHITE};

  ${(props) =>
    props.$answer &&
    css`
      background: ${COLORS.BROWN40};
    `}
`;
