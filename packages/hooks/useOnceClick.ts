import {useCallback} from 'react';

const useOnceClick = (
  options?: { target?: HTMLElement; retain?: boolean }
) => {
  return useCallback((onClick: (event?: any) => void) => {
    const target = options?.target || document;

    const clickHandler = (event?: any) => {
      if (event instanceof MouseEvent) {
        onClick(event);

        if (!options?.retain) {
          target.removeEventListener('click', clickHandler);
        }
      }
    };

    target.addEventListener('click', clickHandler);

    return clickHandler;
  }, [options]);
};

export default useOnceClick;