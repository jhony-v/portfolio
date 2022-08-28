import { Project } from '@/types'
import LinkButton from '@/components/LinkButton'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="bg-gray-600 bg-opacity-20 rounded-2xl flex flex-col mb-10">
      <div>
        <img
          src={project.image}
          alt={project.image}
          className="mx-auto h-40 w-40 rounded-full object-cover block relative -mt-5 border-4 border-dark-100"
        />
      </div>
      <div className="p-4 text-white flex-1 flex-col flex">
        <h3 className="font-bold mb-2">{project.title}</h3>
        <p className="text-sm mb-2">{project.description}</p>
        <div className="flex space-x-1 items-center justify-start mt-auto flex-wrap space-y-1">
          <LinkButton href={project.links.github} text="github" />
          {project.links.demo && (
            <LinkButton href={project.links.demo} text="preview" />
          )}
          {project.links.storybook && (
            <LinkButton href={project.links.storybook} text="storybook" />
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
