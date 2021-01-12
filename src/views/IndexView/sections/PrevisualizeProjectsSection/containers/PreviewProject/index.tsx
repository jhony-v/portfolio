import BasePrimaryButton from "common/Buttons/BasePrimaryButton"
import React from "react"
import styled from "styled-components"

const ImageWrapper = styled.img`
  transform: perspective(400px) rotateY(-10deg);
  width: 500px;
  height: 300px;
`

const technologies = [ "React JS", "Typescript", "Styletron" , "GraphQL", "Next JS" ]

export default function PreviewProject() {
  return (
    <div className="w-full pr-10 pt-10">
      <div className="flex">
        <div className="left pt-5">
          <h2 className="font-bold text-4xl mb-8 text-white">Instagram Clone UI</h2>
          <p className="text-base text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero
            recusandae inventore ex, est neque rem excepturi beatae expedita
            laudantium magni veniam laborum aspernatur architecto consectetur
            provident nemo amet. Provident?
          </p>
        </div>
        <ImageWrapper src="project_images/instagram_clone.PNG" />
      </div>
      <div className="mt-5">
          <div className="flex items-center">
          <BasePrimaryButton>WATCH DEMO</BasePrimaryButton>
          <div className="ml-5 border-white rounded-3xl pl-7 pr-7 pt-3 pb-3 border-2 font-bold text-white text-sm">WATCH CODE</div>
          </div>
      </div>
      <div className="mt-20 grid gap-6 grid-flow-row-dense grid-cols-6">
          {technologies.map((e,i) => (
            <span className="text-white rounded-2xl text-bold text-sm " style={{padding:"8px 25px",background:"rgba(0,0,0,.2)"}} key={i}>{e}</span>
          ))}
      </div>
    </div>
  )
}
