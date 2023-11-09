import * as S from './kebabButton.style.jsx';
import KebabMenuButtons from './KebabMenuButtons.jsx';

const KebabButton = ({ kebabOpen, onClick, onRefuseAnswerClick }) => {
  return (
    <>
      <button onClick={() => onClick(!kebabOpen)}>
        <S.KebabImage />
      </button>
      {kebabOpen && (
        <KebabMenuButtons onRefuseAnswerClick={onRefuseAnswerClick} />
      )}
    </>
  );
};

export default KebabButton;
