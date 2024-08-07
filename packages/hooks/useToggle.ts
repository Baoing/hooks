import { Reducer, useReducer } from 'react';

/**
 * 在 useToggle 中使用 useReducer 而不是 useState 有以下几个理由：
 *
 * 1. 逻辑分离和代码组织
 * useReducer 可以更清晰地分离状态更新逻辑，使代码更易于理解和维护。在 useReducer 中，状态更新逻辑（即 reducer 函数）与组件中的业务逻辑是分开的。这样，当状态更新逻辑变得复杂时，这种分离将更加有用。
 *
 * 2. 状态更新逻辑的可扩展性
 * 虽然目前 useToggle 的状态更新逻辑很简单，但使用 useReducer 使它更容易扩展。如果以后需要添加更多的状态或更复杂的状态更新逻辑，可以很容易地在 reducer 中实现。
 *
 * 3. 一致性和可读性
 * 使用 useReducer 使得状态更新逻辑与其他可能使用 useReducer 的状态管理代码保持一致。对于团队协作项目来说，使用一致的模式有助于提高代码的可读性和可维护性。
 *
 * 4. 强类型支持
 * 在 TypeScript 中，useReducer 提供了更强的类型支持。reducer 函数和状态更新函数的类型是明确的，使得类型检查和自动补全更容易。这有助于避免一些常见的类型错误。
 *
 * @param state
 * @param nextValue
 */
const toggleReducer = (state: boolean, nextValue?: any) =>
  typeof nextValue === 'boolean' ? nextValue : !state;

const useToggle = (initialValue: boolean): [boolean, (nextValue?: any) => void] => {
  return useReducer<Reducer<boolean, any>>(toggleReducer, initialValue);
};

export default useToggle;
