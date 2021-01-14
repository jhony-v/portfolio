import BasePrimaryButton from "common/Buttons/BasePrimaryButton"
import React, { useState } from "react"
import { animated, useTransition } from "react-spring"
import styled from "styled-components"

const BackgroundWrapper = styled.div<{ image: string }>`
  width: 100%;
  height: 400px;
  padding: 10px;
  display: flex;
  background: linear-gradient(20deg, rgba(0, 0, 0, 0.9) 10%, transparent 80%),url("${props => props.image}") no-repeat top / cover;
`

const technologies = [
  "React JS",
  "Typescript",
  "Styletron",
  "GraphQL",
  "Next JS",
]


const Technology = () => {
  return(
    <div className="rounded-md p-4 m-3" style={{backgroundColor:"rgba(100,100,100,.2)"}}>
      <img 
      style={{width:"40px",height:"40px"}} 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" 
      className="block m-auto rounded-full flex-none object-cover" />
      <div className="mt-3 ml-auto mr-auto text-sm text-label">Typescript</div>
    </div>
  )
}

export default function PreviewProject() {

  const [ visible, setVisible ] = useState(true);
  const transition = useTransition(visible,null,{
    from : {
      width : "0px"
    },
    enter : {
      width : "520px"
    },
    leave : {
      width: "0px"
    }
  });
  return (
    <>
      {transition.map(({item,props})=>(
        item && <animated.div className="preview__projects flex-none overflow-y-auto overflow-x-hidden" style={props}  >
        <BackgroundWrapper image="https://cdn.pixabay.com/photo/2021/01/05/01/50/elephants-5889403__340.jpg">
          <div className="mt-auto p-5">
            <div className="text-label font-bold text-2xl w-5/6 mb-4">
              Project of facebook clone UI
            </div>
            <BasePrimaryButton onClick={()=>setVisible(false)}>WATCH DEMO</BasePrimaryButton>
          </div>
        </BackgroundWrapper>
        <div className="mt-5 pl-4 pr-4">
          <p className="text-gray-400 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quos,
              officia sunt maxime nihil labore a, expedita delectus nostrum
              architecto atque. Impedit assumenda possimus qui, earum eum totam
              maxime facilis.
          </p>
          <div className="item mb-3 mt-4 flex">
            <Technology/>
            <Technology/>
            <Technology/>
            <Technology/>
          </div>
        </div>
      </animated.div>
      ))}
    </>
  )
}
