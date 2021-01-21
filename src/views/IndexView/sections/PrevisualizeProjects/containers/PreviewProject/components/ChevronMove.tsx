import React from "react"

type ChevronMoveProps = {
  onClick
  position
}
const ChevronMove: React.FC<ChevronMoveProps> = ({
  children,
  onClick,
  position,
}) => {
  return (
    <div
      className={`${position}-3 md:absolute md:top-1/2  text-label text-3xl transform md:-translate-1/2 phone-100:cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default ChevronMove
