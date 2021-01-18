import { useEffect, useState } from "react"

interface Dimension {
  width: number; 
  height: number 
}

export default function useResize() {
  const [size, setSize] = useState<Dimension>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      let getDimension = () : Dimension => ({
        width : window.innerWidth || document.body.offsetWidth,
        height : window.innerWidth || document.body.offsetWidth
      });
      setSize(getDimension)
      const handler = () => {
        setSize(getDimension())
      }
      window.addEventListener("resize", handler)
      return () => {
        window.removeEventListener("resize", handler)
      }
    }
  }, [])

  return size
}
