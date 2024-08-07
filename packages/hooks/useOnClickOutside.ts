import { RefObject } from "react"
import useEventListener from "./useEventListener";

type Handler = (event: MouseEvent | TouchEvent) => void

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler
) => {
  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      handler(event)
    }
  };
  useEventListener("mousedown", handleClickOutside);
  useEventListener("touchstart", handleClickOutside);
}

export default useOnClickOutside;
