const END_POINT = {
  CREATE_QUESTION: {
    method: 'POST',
    createUrl: (subjectId) => `subjects/${subjectId}/questions/`,
  },
  CREATE_ANSWER: {
    method: 'POST',
    createUrl: (questionId) => `questions/${questionId}/answers/`,
  },
  EDIT_ANSWER: {
    method: 'PUT',
    createUrl: (answerId) => `answers/${answerId}/`,
  },
};
export default END_POINT;
