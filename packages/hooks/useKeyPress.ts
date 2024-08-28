import { useState, useEffect } from 'react';

const useKeyPress = (targetKey: string): boolean => {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = (event: KeyboardEvent) => {
    if (event.key === targetKey) {
      setKeyPressed(true);
    }
  };

  const upHandler = (event: KeyboardEvent) => {
    if (event.key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [downHandler, upHandler]); // 添加依赖数组，确保函数引用稳定

  return keyPressed;
};

export default useKeyPress;
