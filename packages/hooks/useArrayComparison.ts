import { useCallback } from 'react';

const useArrayComparison = () => {
  const compareArrays = useCallback((arr1: string[], arr2: string[]) => {
    const extra = arr2.filter(item => !arr1.includes(item));
    const missing = arr1.filter(item => !arr2.includes(item));
    return { extra, missing };
  }, []);

  return { compareArrays };
};

export default useArrayComparison;