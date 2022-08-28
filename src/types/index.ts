export interface Project {
  title: string
  description: string
  image: string
  technologies: Array<{ name: string; logo: string }>
  links: {
    demo: string
    github: string
    storybook: string
  }
}
