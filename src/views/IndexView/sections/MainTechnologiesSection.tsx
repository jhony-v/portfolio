import BasePrimaryButton from "common/Buttons/BasePrimaryButton"
import React from "react"

const MainTechnologiesSection = () => {
  return (
    <div className="flex mt-48 mb-48">
      <div className="left w-1/2">

      </div>
      <div className="right w-1/2">
        <div className="block w-4/6">
          <div className="text-blue-900 font-bold text-3xl">
            Manage and know principal technologies
          </div>
          <p className="text-gray-400 mt-4 mb-4">
            Soy Desarrollador de Software, especializado en tecnologías web. Me
            encanta la programación, investigar y aprender nuevas tecnologías.
          </p>
          <BasePrimaryButton>Ver más</BasePrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default MainTechnologiesSection
