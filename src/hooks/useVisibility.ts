import { useEffect, useRef, useState } from "react"

export default function useVisibility() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(([element]) => {
      setVisible(element.isIntersecting)
    })
    if (ref)  intersectionObserver.observe(ref.current)

    return () => {
      if (ref) {
        intersectionObserver.disconnect()
      }
    }
  })

  return {
    ref,
    visible,
  }
}
