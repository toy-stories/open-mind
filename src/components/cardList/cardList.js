const API_URL = 'https://openmind-api.vercel.app/1-3';

export const getSubjects = async () => {
  const response = await fetch(`${API_URL}/subjects/`);
  if (!response.ok) throw new Error('에러');
  return await response.json();
};
