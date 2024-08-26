import { useState, useEffect } from 'react';

const useNetworkStatusWithRetry = (retryDelay = 2000) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setRetryCount(0); // 重置重试计数
    };

    const handleOffline = () => {
      setIsOnline(false);
      retryConnection();
    };

    const retryConnection = () => {
      const interval = setInterval(() => {
        if (navigator.onLine) {
          handleOnline();
          clearInterval(interval);
        } else {
          setRetryCount((prev) => prev + 1);
        }
      }, retryDelay);

      return () => clearInterval(interval);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [retryDelay]);

  return { isOnline, retryCount };
};

export default useNetworkStatusWithRetry;
