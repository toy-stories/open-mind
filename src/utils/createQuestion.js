import { fetchClientJson } from 'utils/apiClient.js';
import END_POINT from './endPoint.js';

const {
  CREATE_QUESTION: { method, createUrl },
} = END_POINT;

const createQuestion = async ({ subjectId, content }) => {
  const result = await fetchClientJson({
    method,
    url: createUrl(subjectId),
    body: { content },
  });
  return result;
};

export default createQuestion;
