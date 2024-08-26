import { useState, useEffect } from 'react';

const useCountdown = (initialCount: number) => {
  const [time, setTime] = useState({
    hours: Math.floor(initialCount / 3600),
    minutes: Math.floor((initialCount % 3600) / 60),
    seconds: initialCount % 60,
  });

  useEffect(() => {
    const totalSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds;

    if (totalSeconds <= 0) return; // 如果倒计时结束，直接返回

    const timer = setInterval(() => {
      setTime((prevTime) => {
        const totalSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds - 1;

        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(timer); // 清理定时器
  }, [time]);

  return time;
};

export default useCountdown;
