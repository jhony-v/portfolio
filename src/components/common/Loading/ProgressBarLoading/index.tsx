import React from "react"
import { DurationProps, Progress, ProgressProps, Thumb } from "./index.style"

interface ProgressBarLoadingProps extends DurationProps,ProgressProps {}

export default function ProgressBarLoading({duration,w}:ProgressBarLoadingProps) {
  return (
    <Progress w={w}>
      <Thumb duration={duration} />
    </Progress>
  )
}
