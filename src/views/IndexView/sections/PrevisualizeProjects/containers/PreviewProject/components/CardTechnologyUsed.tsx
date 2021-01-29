import React from "react"

type CardTechnologyUsedProps = { image; title }
const CardTechnologyUsed = ({ image, title }: CardTechnologyUsedProps) => (
  <div className="bg-gray-600 rounded-3xl inline-flex items-center py-3 px-5 mr-4 mb-4">
    <img className="w-6 h-7 md:w-8 md:h-8 object-cover rounded-full" src={image} />
    <span className="font-bold ml-2 text-label">{title}</span>
  </div>
)

export default CardTechnologyUsed
