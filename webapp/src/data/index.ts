import profile from './db/profile.json'
import technologies from './db/technologies.json'
import activities from './db/activities.json'
import projectCatalog from './db/projects/index.json'
import moscowRealtime from './db/projects/moscow-realtime.json'
import voiceRobot from './db/projects/voice-robot.json'
import antifraudAIEgg from './db/projects/antifraud-aiegg.json'
import weatherHealth from './db/projects/weather-health.json'
import contacts from './db/contacts.json'
import aboutPage from './db/about.json'
import navigation from './db/navigation.json'
import interfaceContent from './db/interface.json'
import type { PortfolioContent } from '../types'

export const content = {
  profile,
  technologies,
  activities,
  projects: {
    ...projectCatalog,
    items: [moscowRealtime, voiceRobot, antifraudAIEgg, weatherHealth],
  },
  contacts,
  aboutPage,
  ...navigation,
  ...interfaceContent,
} as PortfolioContent
