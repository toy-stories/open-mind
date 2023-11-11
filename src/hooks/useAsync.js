import { useCallback, useState } from 'react';

export default function useAsync(asyncFunction) {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const wrappedFunction = useCallback(
    async (...args) => {
      setError(null);
      setIsPending(true);
      try {
        const response = await asyncFunction(...args);
        return response;
      } catch (error) {
        setError(error);
        return;
      } finally {
        setIsPending(false);
      }
    },
    [asyncFunction],
  );
  return [isPending, error, wrappedFunction];
}
