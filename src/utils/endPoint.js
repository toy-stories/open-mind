const END_POINT = {
  CREATE_QUESTION: {
    method: 'POST',
    createUrl: (subjectId) => `subjects/${subjectId}/questions/`,
  },
  CREATE_ANSWER: {
    method: 'POST',
    createUrl: (questionId) => `questions/${questionId}/answers/`,
  },
};
export default END_POINT;
