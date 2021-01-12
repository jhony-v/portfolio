import React from "react"
import { useModalVisualize } from "views/IndexView/contexts/ModalVisualize/ModalVisualizeContext"
import { VscClose } from "react-icons/vsc"
import styled from "styled-components"
import useHiddenScrollingScreen from "hooks/useHiddenScrollingScreen"

const CloseWrapper = styled.div`
  width: 50px;
  height: 50px;
`

export default function ClosePrevisualize() {
  const { closeModalActive } = useModalVisualize();
  const onClose = () => {
    closeModalActive("")
  }
  return (
    <CloseWrapper
      className="bg-white text-black absolute top-0 right-0 m-5 cursor-pointer rounded-full shadow-xl flex justify-center items-center"
      onClick={onClose}
    >
      <VscClose size={30} />
    </CloseWrapper>
  )
}
