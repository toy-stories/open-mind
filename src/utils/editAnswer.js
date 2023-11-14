import { fetchClientJson } from 'utils/apiClient.js';
import END_POINT from './endPoint.js';

const {
  EDIT_ANSWER: { method, createUrl },
} = END_POINT;

const editAnswer = async ({ answerId, content, isRejected = false }) => {
  const result = await fetchClientJson({
    method,
    url: createUrl(answerId),
    body: {
      content,
      isRejected,
    },
  });
  return result;
};

export default editAnswer;
