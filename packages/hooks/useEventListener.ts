import { useEffect, useRef } from 'react'

type EventHandler<T extends Event> = T extends Event ? (event: T) => void : (event: Event) => void

const useEventListener = <T extends EventTarget, E extends Event>(
  eventName: string,
  handler: EventHandler<E>,
  element: T = window as unknown as T
) => {
  // 创建一个 ref 来存储事件处理函数
  const savedHandler = useRef<EventHandler<E>>()

  useEffect(() => {
    // 更新事件处理函数的 ref
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    // 定义事件监听器函数
    // @ts-ignore
    const eventListener: EventHandler<E> = (event) => {
      // 使用最新的事件处理函数
      savedHandler.current?.(event)
    }

    // 添加事件监听器
    element.addEventListener(eventName, eventListener as EventListenerOrEventListenerObject)

    // 在组件卸载时移除事件监听器
    return () => {
      element.removeEventListener(eventName, eventListener as EventListenerOrEventListenerObject)
    }
  }, [eventName, element]);
}

export default useEventListener;
