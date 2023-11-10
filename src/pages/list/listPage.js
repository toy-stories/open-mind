import { BASE_URL } from 'utils/constants.js';

export const getSubjects = async ({ sort = 'time', page = 1, limit = 8 }) => {
  const query = `sort=${sort}&offset=${(page - 1) * limit}&limit=${limit}`;
  const response = await fetch(`${BASE_URL}/subjects/?${query}`);
  if (!response.ok) throw new Error('에러');
  return await response.json();
};

export const getNextSubjects = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error('에러');
  const { results, count, next, previous } = await response.json();
  return { results, pageCount: Math.ceil(count / 8), next, previous };
};
