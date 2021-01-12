import { useEffect, useState } from "react"


interface DurationProps {
  duration ?: number;
  auto ?: boolean;
}

export default function useDelay({ duration = 1000,auto = false } : DurationProps = {}) {
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
    if (isStart || auto) {
      const handler = setTimeout(() => setCompleted(true), duration);
      return () => clearTimeout(handler);
    }
  }, [setCompleted, duration, isStart,auto])

  return {
    completed,
    start,
    reset,
  }
}
