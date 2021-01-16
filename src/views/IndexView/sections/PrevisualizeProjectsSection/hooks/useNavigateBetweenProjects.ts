import { useCallback } from "react";
import { usePrevisualizeProject } from "../contexts/PrevisualizeProject/PrevisualizeProjectContext"

export default function useNavigateBetweenProjects() {

    const { listProjects ,  currentProject , setCurrentProject } = usePrevisualizeProject();
    
    const getIndexOfCurrentProjectWatching = () => listProjects.findIndex(project => project.title === currentProject.title);

    const onMove = useCallback((direction : number) => {
        setCurrentProject(listProjects[ (getIndexOfCurrentProjectWatching()+direction) % listProjects.length ]);
    },[getIndexOfCurrentProjectWatching]);

    const onNext = () => onMove(1);
    const onPrevious = () =>  onMove(1);

    return {
        onNext,
        onPrevious
    }
}
