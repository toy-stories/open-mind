const END_POINT = {
  CREATE_QUESTION: {
    method: 'POST',
    createUrl: (subjectId) => `subjects/${subjectId}/questions/`,
  },
};
export default END_POINT;
