import {useCallback, useState} from 'react';

const useOnceClick = (onClick: (event?: any) => void) => {
  const [hasClicked, setHasClicked] = useState(false);

  return useCallback((event: any) => {
    if (!hasClicked) {
      onClick(event);
      setHasClicked(true);
    }
  }, [hasClicked, onClick]);
};

export default useOnceClick;