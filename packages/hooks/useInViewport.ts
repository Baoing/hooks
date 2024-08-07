import { useEffect, useState } from "react"

const useInViewport = (options?: IntersectionObserverInit) => {
  const [inViewport, setInViewport] = useState(false)
  const [node, setNode] = useState<Element | null>(null)

  useEffect(() => {
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      setInViewport(entry.isIntersecting)
    }, options)

    observer.observe(node)

    return () => {
      if (node) {
        observer.unobserve(node)
      }
    }
  }, [node, options])

  return [setNode, inViewport] as const;
}

export default useInViewport;
