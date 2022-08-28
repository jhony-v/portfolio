import Navigator from '@/layouts/Navigator'
import { Project } from '@/types'
import ProjectsView from '@/views/ProjectsView'
import type { NextPage } from 'next'

type ProjectsProps = {
  projects: Project[]
}

const Projects: NextPage<ProjectsProps> = ({ projects }) => {
  return (
    <Navigator>
      <ProjectsView projects={projects} />
    </Navigator>
  )
}

export async function getServerSideProps() {
  const projects = await require('@/assets/projects.json')
  return {
    props: {
      projects,
    },
  }
}

export default Projects
