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

// useMemorizedFn 和 useMemo 在实现方式和使用场景上确实有一些区别:

// 实现方式:
// useMemorizedFn 是一个自定义的 React Hook,它内部使用 useRef 来管理缓存,并实现了记忆化函数的功能。
// useMemo 是 React 内置的一个 Hook,它可以用于缓存任何类型的值,不仅仅是函数。

// 缓存粒度:
// useMemorizedFn 缓存的是函数调用的结果,即使函数参数相同,每次调用都会返回缓存的结果。
// useMemo 缓存的是表达式的结果,如果表达式中的依赖项发生变化,则会重新计算表达式。

// 依赖项:
// useMemorizedFn 不需要依赖项,因为它使用 useRef 来管理缓存,缓存的生命周期与组件实例相同。
// useMemo 需要指定依赖项数组,当依赖项发生变化时,才会重新计算表达式。

// 使用场景:
// useMemorizedFn 更适合于缓存函数调用的结果,特别是在需要频繁调用同一个函数的场景中。
// useMemo 更适合于缓存任何类型的值,例如复杂的计算结果或者昂贵的渲染操作。
// 总的来说,useMemorizedFn 是一个更专注于函数缓存的自定义 Hook,而 useMemo 是 React 内置的一个更通用的缓存 Hook。两者都可以用于优化性能,但根据具体的需求和场景,选择合适的 Hook 会更有利于代码的可读性和维护性。



// import useMemorizedFn from './useMemorizedFn';
//
// const FibonacciCalculator = () => {
//   const memorizedFibonacci = useMemorizedFn((n: number): number => {
//     if (n <= 1) return n;
//     return memorizedFibonacci(n - 1) + memorizedFibonacci(n - 2);
//   });
//
//   const result = memorizedFibonacci(100);
//
//   return (
//     <div>
//       <p>The 100th Fibonacci number is: {result}</p>
//   <p>Cached results: {memorizedFibonacci.cache.size}</p>
//   </div>
// );
// };
//
// export default FibonacciCalculator;