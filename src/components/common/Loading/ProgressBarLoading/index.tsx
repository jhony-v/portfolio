import React from "react"
import { DurationProps, Progress, ProgressProps, Thumb } from "./index.style"

interface ProgressBarLoadingProps extends DurationProps,ProgressProps {
  className ?: string;
}

export default function ProgressBarLoading({duration,className,w}:ProgressBarLoadingProps) {
  return (
    <Progress w={w} className={className}>
      <Thumb duration={duration} />
    </Progress>
  )
}
