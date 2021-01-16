import React, { useState } from "react"
import { PrevisualizeProjectContext, PrevisualizeProjectContextState, Project } from "./PrevisualizeProjectContext"
import projects_v1 from "assets/json/projects_v1.json";


const PrevisualizeProjectProvider: React.FC = ({ children }) => {
  const [ listProjects , setListProjects  ] = useState<Project[]>(projects_v1 as Project[]);
  const [ showing , setShowing  ] = useState<boolean>(false);
  const [ currentProject , setCurrentProject  ] = useState<Partial<Project>>({});

  const value : PrevisualizeProjectContextState = {
    listProjects,
    currentProject,
    showing,
    setShowing,
    setCurrentProject,
  }
  return (
    <PrevisualizeProjectContext.Provider value={value}>
      {children}
    </PrevisualizeProjectContext.Provider>
  )
}

export default PrevisualizeProjectProvider
