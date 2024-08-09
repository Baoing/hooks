import { useEffect } from 'react';

type Callback = (search: string) => void;

const useSearchListener = (callback: Callback): void => {
  useEffect(() => {
    if (callback && typeof callback === 'function') {
      callback(location.search);
    }
  }, [location.search, callback]);
};

export default useSearchListener;