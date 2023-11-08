import QuestionModal from 'components/modal/modalContent/QuestionModal';
import useModal from 'hooks/useModal';

const ModalTestPage = () => {
  const { Modal, openModal, closeModal } = useModal();
  return (
    <>
      <h1>modal test page</h1>
      <button onClick={openModal}>open</button>
      <Modal>
        <QuestionModal />
        <button onClick={closeModal}>close</button>
      </Modal>
    </>
  );
};
export default ModalTestPage;
