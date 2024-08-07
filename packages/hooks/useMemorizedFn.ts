import { useRef } from 'react';

type MemorizedFunction<T extends (...args: any[]) => any> = T & {
  cache: Map<string, ReturnType<T>>;
};

const useMemorizedFn = <T extends (...args: any[]) => any>(
  fn: T
): MemorizedFunction<T> => {
  const cache = useRef(new Map<string, ReturnType<T>>());

  const memFn = ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    if (cache.current.has(key)) {
      return cache.current.get(key)!;
    }
    const result = fn(...args);
    cache.current.set(key, result);
    return result;
  }) as MemorizedFunction<T>;

  memFn.cache = cache.current;

  return memFn;
};

export default useMemorizedFn;
