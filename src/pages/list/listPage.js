import { fetchClientJson } from 'utils/apiClient';

export const getSubjects = async ({ sort = 'time', page = 1, limit = 8 }) => {
  const query = `sort=${sort}&offset=${(page - 1) * limit}&limit=${limit}`;
  const response = await fetchClientJson({
    url: `subjects/?${query}`,
    method: 'GET',
  });
  return response;
};
