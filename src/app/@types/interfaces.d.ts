export interface LinkContact {
  link: string;
  name: string;
  image: string;
  icon: string;
  background: string;
}

export interface Stacks {
  image: string;
  name: string;
  detail: string;
}

export interface StackCategory {
  category: string;
  stacks: Stacks[];
}

export interface UserGithub {
  avatar_url: string;
}

export interface ProjectRepository {
  html_url: string;
  name: string;
  description: string;
  created_at: string;
  language: string;
}
