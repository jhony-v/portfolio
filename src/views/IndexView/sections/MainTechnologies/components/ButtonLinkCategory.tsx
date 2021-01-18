import React from "react";

type ButtonLinkCategoryProps = {
  text: string
  selected?: boolean
  onClick: (id: string) => void
  id: string
}
const ButtonLinkCategory = ({
  text,
  selected,
  onClick,
  id,
}: ButtonLinkCategoryProps) => {
  const handlerOnClick = () => onClick(id)
  return (
    <div
      onClick={handlerOnClick}
      className={`mr-8 border-b-2 sm:cursor-pointer text-gray-300 font-bold pb-4 pt-4 ${
        selected ? "border-primary text-primary" : "border-transparent"
      }`}
    >
      {text}
    </div>
  )
}

export default ButtonLinkCategory
