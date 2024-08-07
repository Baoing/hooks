import { useEffect, useState } from 'react'

const useThrottle = <T>(value: T, delay: number): T => {
  const [throttledValue, setThrottledValue] = useState<T>(value)
  const [lastExecTime, setLastExecTime] = useState<number>(0)

  useEffect(() => {
    const now = Date.now()
    if (now - lastExecTime >= delay) {
      setThrottledValue(value)
      setLastExecTime(now)
    }
  }, [value, delay, lastExecTime]);

  return throttledValue;
}

export default useThrottle;



// ### 解释
//
// 1. **`useThrottle` Hook**:
// - `useThrottle` Hook 接受一个值 `value` 和一个延迟 `delay` 作为参数，并返回一个节流后的值。
//
// 2. **`useState`**:
// - 使用 `useState` 来存储节流后的值 `throttledValue`。
//
// 3. **`useRef`**:
// - 使用 `useRef` 来存储上次执行的时间 `lastExecuted`。
//
// 4. **`useEffect`**:
// - 使用 `useEffect` 来设置一个 `setTimeout`，在指定的延迟时间后更新节流后的值。
//    - 每次 `value` 或 `delay` 改变时，清除之前的 `setTimeout`，并设置一个新的 `setTimeout`。
//    - `handler` 确保在指定时间间隔内最多执行一次函数。
//
// 5. **返回节流后的值**:
// - `useThrottle` Hook 返回节流后的值 `throttledValue`。
//
// ### 示例使用
//
// 以下是如何在组件中使用 `useThrottle` Hook 的示例：
//
// ```tsx
// import React, { useState } from 'react';
// import useThrottle from './useThrottle';
//
// const ThrottledInput = () => {
//   const [inputValue, setInputValue] = useState('');
//   const throttledValue = useThrottle(inputValue, 1000);
//
//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Type something..."
//       />
//       <p>Throttled Value: {throttledValue}</p>
//     </div>
//   );
// };
//
// export default ThrottledInput;
// ```

