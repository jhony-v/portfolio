import { createContext, useContext } from "react";

export interface ModalVisualizeState {
    modalActive : string,
    setModalActive : (modalKey : string) => void;
    closeModalActive : (modalKey : string) => void; 
}

export const ModalVisualizeContext = createContext<ModalVisualizeState | {}>({});

export const useModalVisualize = () => useContext(ModalVisualizeContext) as ModalVisualizeState;
