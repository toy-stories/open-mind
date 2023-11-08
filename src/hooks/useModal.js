import { useState } from 'react';
import ModalBack from 'components/modal/modalBack/ModalBack.jsx';
import { BODY_DEFAULT_OVERFLOW } from 'utils/constants.js';

const useModal = ({ isClickOutSideClose = true } = {}) => {
  const body = document.body;

  const [isModalOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    body.style.overflow = BODY_DEFAULT_OVERFLOW;
  };

  return {
    Modal: isModalOpen
      ? ({ children }) => {
          return (
            <ModalBack closeModal={isClickOutSideClose ? closeModal : null}>
              {children}
            </ModalBack>
          );
        }
      : () => null,
    openModal,
    closeModal,
    isModalOpen,
  };
};

export default useModal;
