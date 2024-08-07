import {useCallback, useEffect, useState} from 'react';

const useError = (): ((err: Error) => void) => {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  return useCallback((err: Error) => {
    setError(err);
  }, []);
};

export default useError;
