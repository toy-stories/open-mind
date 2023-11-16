import { useEffect } from 'react';

const useObserver = (callback, options, externalRef) => {
  useEffect(() => {
    if (!externalRef.current) return;

    const observer = new IntersectionObserver(callback, options);
    observer.observe(externalRef.current);

    return () => observer.disconnect();
  }, [externalRef, options, callback]);
};

export default useObserver;
