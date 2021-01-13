import React from "react"
import styled from "styled-components"
import SectionFullHeight from "layouts/SectionFullHeight"
import MiniCardTechonology from "./components/MiniCardTechonology";
import { useTransition, animated } from "react-spring"
import useVisibility from "hooks/useVisibility";
import Subtitle from "common/Texts/Subtitle";

const MainTechnologiesWrapper = styled(SectionFullHeight)``


const stack = Array(20).fill({
  text : "React JS",
  image : "https://cdn.auth0.com/blog/react-js/react.png"
}).map((item,key) => ({
  key,
  ...item
}))

const MainTechnologiesSection = () => {
  const { ref, visible } = useVisibility();
  const data = useTransition(visible ? stack : null,visible ? (item => item.key) : null,{
    from : {
      opacity : 0,
    },
    enter : {
      opacity : 1,
    },
    leave : {
      opacity : 0,
    },
    trail : 100
  });

  return (
    <MainTechnologiesWrapper className="p-10 flex flex-col" data-id="technologies">
      <div className="pb-10">
        <Subtitle>Skill technologies</Subtitle>
        <div className="text-label text-5xl font-bold">My skills and technologies</div>
        <div className="text-label mt-10">My hard skills is in frontend development. Currenly I work more in react ecosystem.</div>
      </div>
      <div ref={ref} className="grid grid-flow-col auto-cols-max gap-5 gap-x-20">
          {/* {data.map(({item,key,props}) => (
            item && <animated.div key={key} style={props}>
              <MiniCardTechonology
                text={item.text}
                image={item.image}
              />
            </animated.div>
          ))} */}
      </div>
    </MainTechnologiesWrapper>
  )
}

export default MainTechnologiesSection
