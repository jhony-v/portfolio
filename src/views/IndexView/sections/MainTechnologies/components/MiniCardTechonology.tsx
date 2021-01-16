import useVisibility from "hooks/useVisibility"
import React, { useEffect, useState } from "react"
import { animated,config,useSpring } from "react-spring"
import styled from "styled-components"

const StyledCard = styled(animated.div)`
  height: 160px;
  border-radius: 5px;
  background-color: #272727;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
`

const MiniCardTechonology = ({ text, image }) => {
  const [ hover, setHover ] = useState(false);
  const { ref : refImage, visible } = useVisibility({disconnect:true});
  const { ref : refCard , visible : visibleCard } = useVisibility({
    threshold : [.4]
  });
  const styleCard = useSpring({
    transform : `scale(${hover ? 1.2 : 1})`,
    config : config.wobbly,
    opacity : visibleCard ? 1 : 0
  });
  
  const onEnter = () => {
    setHover(true);
  }
  const onLeave = () => {
    setHover(false);
  }

  useEffect(() => {
    refImage.current.src = visible ? refImage.current.getAttribute("data-src") : "";
  },[visible,image]);

  return (
    <StyledCard
      className="flex items-center flex-col justify-center"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={styleCard}
      ref={refCard}
    >
      <img
        data-src={image}
        alt=""
        ref={refImage}
        className="w-12 h-12 mb-2 rounded-full bg-white object-cover"
      />
      <span className="text-sm text-center text-label">{text}</span>
    </StyledCard>
  )
}

export default MiniCardTechonology
