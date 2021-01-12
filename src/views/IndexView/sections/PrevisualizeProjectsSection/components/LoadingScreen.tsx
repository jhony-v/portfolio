import PulseCircleLoading from "common/Loading/PulseCircleLoading"
import React from "react"

export default function ScreenLoading() {
  return (
    <div className="fixed w-full h-full flex-col flex justify-center items-center">
      <PulseCircleLoading bg="primary" />
      <span className="text-label pb-10">One moment, We're loading data...</span>
    </div>
  )
}
