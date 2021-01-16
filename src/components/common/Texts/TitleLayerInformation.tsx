import React from "react"
import Subtitle from "./Subtitle"

type TitleLayerInformationProps = {
  subtitle?: string
  title?: string,
  className ?: string;
}
const TitleLayerInformation = ({
  subtitle,
  title,
  className
}: TitleLayerInformationProps) => {
  return (
    <div className={className}>
      <Subtitle>{subtitle}</Subtitle>
      <div className="text-label text-3xl sm:text-5xl mt-3 font-bold">{title}</div>
    </div>
  )
}

export default TitleLayerInformation
