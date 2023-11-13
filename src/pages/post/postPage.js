import { fetchClientJson } from 'utils/apiClient';

export const getPosts = async (subjectId) => {
  const [questionsData, subjectData] = await Promise.all([
    fetchClientJson({
      url: `subjects/${subjectId}/questions/`,
      method: 'GET',
    }),
    fetchClientJson({
      url: `subjects/${subjectId}/`,
      method: 'GET',
    }),
  ]);
  return { questionsData: questionsData, subjectData: subjectData };
};

export const getNextPosts = async (subjectId, nextParams) => {
  return await fetchClientJson({
    url: `subjects/${subjectId}/questions/${nextParams}`,
    method: 'GET',
  });
};

export const postCreateReaction = async (type, questionId) => {
  return await fetchClientJson({
    url: `questions/${questionId}/reaction/`,
    method: 'POST',
    body: {
      type: type,
    },
  });
};
