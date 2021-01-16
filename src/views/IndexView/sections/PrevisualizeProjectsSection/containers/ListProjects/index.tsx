import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import { usePrevisualizeProject } from '../../contexts/PrevisualizeProject/PrevisualizeProjectContext';

export default function ListProjects() {
    const {  listProjects } = usePrevisualizeProject();
    return (
        <div className="list__projects w-full m-auto">
            {listProjects.map((e,key) => (
                <ProjectCard project={e} key={key} />
            ))}    
        </div>
    )
}
