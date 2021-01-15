import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import projects_v1 from "assets/json/projects_v1.json";

export default function ListProjects() {
    
    return (
        <div className="list__projects w-full m-auto">
            {projects_v1.map(({title,image},key) => (
                <ProjectCard image={image} title={title} key={key} />
            ))}    
        </div>
    )
}
