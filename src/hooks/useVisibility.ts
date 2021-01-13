import { MutableRefObject } from "react"
import { useEffect, useRef, useState } from "react"

export default function useVisibility() {
  const ref = useRef(null) as MutableRefObject<any>;
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(([element]) => {
      setVisible(element.isIntersecting)
    })
    if (ref.current) intersectionObserver.observe(ref.current)

  },[])

  return {
    ref,
    visible,
  }
}
