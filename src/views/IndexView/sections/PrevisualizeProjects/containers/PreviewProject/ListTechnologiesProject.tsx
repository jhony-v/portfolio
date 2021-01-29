import React from "react"
import CardTechnologyUsed from "./components/CardTechnologyUsed"

export default function ListTechnologiesProject({ data }) {
  return (
    <div className="project__technologies w-5/6 mx-auto mb-12">
      <div className="text-lg mb-5 font-bold text-label">Technologies</div>
      <div className="list__project-technologies flex flex-wrap">
        {data.map((item, index) => (
          <CardTechnologyUsed image={item.logo} title={item.name} key={index} />
        ))}
      </div>
    </div>
  )
}
