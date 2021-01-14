import { useEffect, useState } from "react"


interface DurationProps {
  duration ?: number;
}

export default function useDelay({ duration = 1000 } : DurationProps = {}) {
  const [completed, setCompleted] = useState<boolean>(false)
  const [isStart, setStart] = useState<boolean>(false)
  
  const start = () => {
    setStart(true)
  }

  const reset = () => {
    setCompleted(false)
    setStart(false)
  }

  useEffect(() => {
    if (isStart) {
      const handler = setTimeout(() => setCompleted(true), duration);
      return () => clearTimeout(handler);
    }
  }, [setCompleted, duration, isStart])

  return {
    completed,
    start,
    reset,
  }
}
