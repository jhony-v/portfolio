import React, { memo } from "react"
import styled from "styled-components"
import tw from "twin.macro"

const Icon = styled.span`${tw`text-2xl cursor-pointer`}`
const Tooltip = styled.span`${tw`absolute text-white shadow-md p-2 rounded-lg z-20 transform invisible right-0 opacity-0 md:translate-x-1/2 bg-primary duration-500`}`
const Li = styled.li<{ isSelected?: boolean }>`
  &:hover ${Tooltip} {
    ${tw`transform opacity-100 visible -translate-y-full md:translate-x-full`}
  }
  ${tw`pt-4 pb-4 w-full flex justify-center relative duration-500 md:border-l-4 border-transparent`}
  ${props => props.isSelected ? tw`border-primary text-primary` : tw` text-label`}
`

type LiItemNavigationProps = {
  to: string
  onClick: (to: string) => void
  selected: string
  icon: React.JSXElementConstructor<{}>
}
const LiItemNavigation = ({to,icon: IconComponent,onClick,selected,}: LiItemNavigationProps) => {
  const isSelected = to === selected
  const onLinkSelected = () => {
    onClick(to)
  }
  return (
    <Li isSelected={isSelected}>
      <Icon onClick={onLinkSelected}>
        <IconComponent />
      </Icon>
      <Tooltip>{to.replace("#", "")}</Tooltip>
    </Li>
  )
}

export default memo(LiItemNavigation)
