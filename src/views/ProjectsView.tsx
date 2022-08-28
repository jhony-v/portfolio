import Detail from '@/components/Detail'
import ProjectCard from '@/components/ProjectCard'
import { Project } from '@/types'

type ProjectsProps = {
  projects: Project[]
}

const ProjectsView = ({ projects }: ProjectsProps) => {
  return (
    <Detail title="Projects">
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((projectItem, index) => (
          <ProjectCard key={index} project={projectItem} />
        ))}
      </div>
    </Detail>
  )
}

export default ProjectsView
