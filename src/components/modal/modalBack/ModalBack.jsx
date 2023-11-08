import { createPortal } from 'react-dom';
import * as S from './modalBack.style.js';

export default function ModalBack({ closeModal, children }) {
  return createPortal(
    <S.ModalBackWrapper onClick={closeModal}>{children}</S.ModalBackWrapper>,
    document.getElementById('modal-root'),
  );
}
