import useDelay from "hooks/useDelay"
import React from "react"
import ClosePrevisualize from "./components/ClosePrevisualize"
import LoadingScreen from "./components/LoadingScreen"

const PrevisualizeProjectsSection = () => {
  const { completed } = useDelay({auto:true,duration:2000})
  if (completed)
    return (
      <div className="flex h-full p-6 w-full relative">
        <ClosePrevisualize />
      </div>
    )
  return <LoadingScreen/>
}

export default PrevisualizeProjectsSection
