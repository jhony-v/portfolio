import React from "react"

type SmoothTextProps = {
  className?: string
}
const SmoothText: React.FC<SmoothTextProps> = ({ children, className }) => {
  return <div className={`text-gray-400 ${className}`}>{children}</div>
}

export default SmoothText
