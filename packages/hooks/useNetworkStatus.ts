import { useState, useEffect } from 'react';

const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(() => {
    // 检查 navigator.onLine 是否可用
    return typeof navigator !== 'undefined' ? navigator.onLine : true;
  });

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // 检查浏览器是否支持 online/offline 事件
    if (typeof window !== 'undefined') {
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
    }

    // Fallback: 使用定时器定期检查网络状态
    const checkNetworkStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Fallback 机制：增加了一个定时器，每 5 秒检查一次网络状态，以防止在不支持事件的浏览器中无法更新状态。
    const intervalId = setInterval(checkNetworkStatus, 5000);

    // 清理事件监听器和定时器
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      }
      clearInterval(intervalId);
    };
  }, []);

  return isOnline;
};

export default useNetworkStatus;
