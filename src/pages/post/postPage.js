import { fetchClientJson } from 'utils/apiClient';

const POST_PAGE_LIMIT = 8;

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

export const getNextPosts = async (subjectId, offset) => {
  if (!offset) return;
  return await fetchClientJson({
    url: `subjects/${subjectId}/questions/?limit=${POST_PAGE_LIMIT}&offset=${offset}`,
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
