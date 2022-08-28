import { MutableRefObject } from 'react'
import { useEffect, useRef, useState } from 'react'

type VisibilityProps = {
  disconnect?: boolean
} & IntersectionObserverInit

export default function useVisibility(
  { disconnect, ...restProps }: VisibilityProps = { disconnect: false }
) {
  const ref = useRef(null) as MutableRefObject<any>
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(([element]) => {
      setVisible(element.isIntersecting)
      if (disconnect && element.isIntersecting) {
        intersectionObserver.unobserve(ref.current)
      }
    }, restProps)
    if (ref.current) intersectionObserver.observe(ref.current)
    return () => {
      if (ref.current) {
        intersectionObserver.disconnect()
      }
    }
  }, [disconnect])

  return {
    ref,
    visible,
  }
}
