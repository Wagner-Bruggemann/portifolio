export type Item = {
  title: string
  sections: string[]
}

export type NavItem = {
  id: number
  label: string
  active: boolean
  targetId: string
}

export type ProjectItem = {
  title: string
  sections: string[]
}

export type Project = {
  active: boolean
  opened: boolean
  mainImage: string
  company: string
  companyLink: string
  title: string
  imagesSectionTitle: string
  tags: string[]
  items: ProjectItem[]
  images: string[]
}

export enum Theme {
  Light,
  Dark,
}

export enum Language {
  Portuguese = 'portuguese',
  English = 'english',
}
