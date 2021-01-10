import  { useEffect } from "react"

export default function useScrolling(onScrolling) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScrolling)
      return () => {
        window.addEventListener("scroll", onScrolling)
      }
    }
  }, [])
}
