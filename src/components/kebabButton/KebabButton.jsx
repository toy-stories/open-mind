import * as S from './kebabButton.style.jsx';
import KebabMenuButtons from './KebabMenuButtons.jsx';

const KebabButton = ({
  kebabOpen,
  onClick,
  onRefuseAnswerClick,
  onDeleteAnswerClick,
  onDeleteQuestionClick,
  postData,
}) => {
  return (
    <>
      <button onClick={() => onClick()}>
        <S.KebabImage />
      </button>
      {kebabOpen && (
        <KebabMenuButtons
          onRefuseAnswerClick={onRefuseAnswerClick}
          onDeleteAnswerClick={onDeleteAnswerClick}
          onDeleteQuestionClick={onDeleteQuestionClick}
          postData={postData}
        />
      )}
    </>
  );
};

export default KebabButton;
