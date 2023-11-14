import { fetchClientJson } from 'utils/apiClient.js';
import END_POINT from './endPoint.js';

const {
  CREATE_ANSWER: { method, createUrl },
} = END_POINT;

const createAnswer = async ({ questionId, content }) => {
  const result = await fetchClientJson({
    method,
    url: createUrl(questionId),
    body: {
      content: content,
      isRejected: false,
    },
  });
  return result;
};

export default createAnswer;
