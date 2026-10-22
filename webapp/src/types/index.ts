import type { ReactNode } from 'react'

export type NavigationItem = {
  label: string
  to: string
  end?: boolean
}

export type Technology = {
  name: string
  featured?: boolean
}

export type ActivityItem = {
  label: string
  icon: 'monitor' | 'brain' | 'phone' | 'cube' | 'heart'
}

export type SectionHeadingProps = {
  number: string
  title: string
  id?: string
  showArrowUpRight?: boolean
}

export type PanelProps = {
  children: ReactNode
  className?: string
}

export type PortfolioContent = {
  profile: {
    brand: string
    brandTitle: string
    heroNumber: string
    sectionNumbers: {
      about: string
      technologies: string
      activities: string
      motivation: string
    }
    eyebrow: string
    greeting: string
    name: string
    description: string
    interestsLabel: string
    interests: { label: string; featured?: boolean }[]
    portraitLabel: string
    about: { heading: string; paragraphs: string[] }
    technologyHeading: string
    activitiesHeading: string
    motivation: { heading: string; quote: string }
    pageLabel: string
  }
  technologies: Technology[]
  activities: ActivityItem[]
  navigation: NavigationItem[]
  sections: { title: string; number: string; path: string }[]
  messages: {
    notFoundNumber: string
    notFoundTitle: string
    homeLink: string
    sectionPlaceholder: string
    sectionBackLink: string
  }
  labels: {
    mainNavigation: string
    moreTechnologies: string
  }
}
