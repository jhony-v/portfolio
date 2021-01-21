import React, { useEffect, useState } from "react"
import { PrevisualizeProjectContext, PrevisualizeProjectContextState, Project } from "./PrevisualizeProjectContext"

const PrevisualizeProjectProvider: React.FC = ({ children }) => {
  const [ listProjects , setListProjects  ] = useState<Project[]>([]);
  const [ showing , setShowing  ] = useState<boolean>(false);
  const [ currentProject , setCurrentProject  ] = useState<Partial<Project>>({});

  useEffect(() => {
      import("assets/json/projects_v1.json").then((e) => {
        setListProjects(e.default as Project[]);
      })
  },[]);

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
