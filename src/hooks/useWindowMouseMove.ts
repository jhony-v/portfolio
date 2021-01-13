import  { useEffect } from "react"

export default function useWindowMouseMove(handler) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handler)
      return () => {
        window.addEventListener("mousemove", handler)
      }
    }
  }, [])
}
