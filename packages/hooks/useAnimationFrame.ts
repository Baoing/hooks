import { useEffect, useRef, useCallback } from 'react';

const useAnimationFrame = (callback: (deltaTime: number) => void, isActive: boolean = true) => {
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  const animate = useCallback((time: number) => {
    if (previousTimeRef.current != null) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime);
    }
    previousTimeRef.current = time;

    if (isActive) {
      requestRef.current = requestAnimationFrame(animate);
    }
  }, [callback, isActive]);

  useEffect(() => {
    if (isActive) {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate, isActive]);
};

export default useAnimationFrame;
