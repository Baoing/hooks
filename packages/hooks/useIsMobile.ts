import { useEffect, useState } from 'react';
import useWindowSize from './useWindowSize';

type UseIsMobileProps = {
  isWindowWide?: boolean
}

const useIsMobile = (props?:UseIsMobileProps): boolean => {
  const [isMobile, setIsMobile] = useState(false);
  const { width, height } = useWindowSize();

  const checkIsMobile = () => {
    const userAgentInfo = navigator.userAgent;
    const mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    let mobileFlag = false;

    for (let agent of mobileAgents) {
      if (userAgentInfo.indexOf(agent) > 0) {
        mobileFlag = true;
        break;
      }
    }

    if (props?.isWindowWide && width < 767 && height < 750) {
      mobileFlag = true;
    }

    return mobileFlag;
  };

  useEffect(() => {
    setIsMobile(checkIsMobile());
  }, [width, height]);

  return isMobile;
};

export default useIsMobile;
