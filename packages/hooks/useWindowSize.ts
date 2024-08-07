import { useState } from "react"
import useEventListener from "./useEventListener";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () =>
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

  useEventListener("resize", handleResize);

  return windowSize;
}

export default useWindowSize;
