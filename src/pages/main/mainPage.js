import { BASE_URL } from 'utils/constants.js';

export const createFeedId = async (name) => {
  const response = await fetch(`${BASE_URL}/subjects/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) throw new Error('에러');
  const data = await response.json();
  localStorage.setItem('userId', JSON.stringify(data.id));

  return data.id;
};
