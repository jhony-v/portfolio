import { createContext, useContext } from 'react'

export interface Technology {
    name ?: string;
    logo ?: string;
}

export interface ExternalLinks {
    demo ?: string;
    github ?: string;
}

export interface Project {
    title : string;
    description : string;
    image : string;
    technologies : Technology[],
    links ?: ExternalLinks;
}

export interface PrevisualizeProjectContextState {
    listProjects ?: Project[],
    currentProject : Partial<Project>,
    showing : boolean;
    setShowing : React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentProject : React.Dispatch<React.SetStateAction<Partial<Project>>>
}

export const PrevisualizeProjectContext = createContext<PrevisualizeProjectContextState | undefined>(undefined);

export const usePrevisualizeProject = () => useContext(PrevisualizeProjectContext) as PrevisualizeProjectContextState;