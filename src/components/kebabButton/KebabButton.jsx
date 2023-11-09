import * as S from './kebabButton.style.jsx';
import KebabMenuButtons from './KebabMenuButtons.jsx';

const KebabButton = ({ kebabOpen, onClick }) => {
  return (
    <>
      <button onClick={() => onClick(!kebabOpen)}>
        <S.KebabImage />
      </button>
      {kebabOpen && <KebabMenuButtons />}
    </>
  );
};

export default KebabButton;
