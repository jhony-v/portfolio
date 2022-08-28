import useVisibility from '@/hooks/useVisibility'
import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  height: 160px;
  border-radius: 5px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
`

type TechnologyCardProps = {
  text: string
  image: string
}

const TechnologyCard = ({ text, image }: TechnologyCardProps) => {
  const { ref: refImage, visible } = useVisibility({ disconnect: true })

  useEffect(() => {
    refImage.current.src = visible
      ? refImage.current.getAttribute('data-src')
      : ''
  }, [visible, image])

  return (
    <StyledCard className="flex items-center flex-col justify-center bg-gray-600 bg-opacity-20">
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

export default TechnologyCard
