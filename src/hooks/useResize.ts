import { useEffect, useState } from "react"

export default function useResize() {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handler = () => {
        setSize({
          width: window.innerWidth || document.body.offsetWidth,
          height: window.innerHeight || document.body.offsetHeight,
        })
      }
      window.addEventListener("resize", handler)
      return () => {
        window.removeEventListener("resize", handler)
      }
    }
  }, [])

  return size
}
