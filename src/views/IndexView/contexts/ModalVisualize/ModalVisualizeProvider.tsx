import React, { useEffect, useState } from "react"
import {
  ModalVisualizeContext,
  ModalVisualizeState,
} from "./ModalVisualizeContext"

type ModalVisualizeProviderProps = {
  children: React.ReactNode
}
const ModalVisualizeProvider = ({ children }: ModalVisualizeProviderProps) => {
  const [modalActive, setModal] = useState<string>("")

  const value: ModalVisualizeState = {
    modalActive,
    closeModalActive: () => setModal(""),
    setModalActive: (modalKey: string) => setModal(modalKey),
    isEqual : (value : string) => modalActive === value
  }

  return (
    <ModalVisualizeContext.Provider value={value}>
      {children}
    </ModalVisualizeContext.Provider>
  )
}

export default ModalVisualizeProvider
