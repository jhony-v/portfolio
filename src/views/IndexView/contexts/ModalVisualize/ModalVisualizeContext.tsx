import { createContext, useContext } from "react";

export interface ModalVisualizeState {
    modalActive : string,
    setModalActive : (modalKey : string) => void;
    closeModalActive : (modalKey : string) => void; 
    isEqual : (value : string) => boolean
}

export const ModalVisualizeContext = createContext<ModalVisualizeState | {}>({});

export const useModalVisualize = () => useContext(ModalVisualizeContext) as ModalVisualizeState;
