import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { SectionPage } from '../pages/SectionPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { ProjectDetailPage } from '../pages/ProjectDetailPage'
import { ContactsPage } from '../pages/ContactsPage'
import { AboutPage } from '../pages/AboutPage'
import { content } from '../data'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  ...content.sections.map((section) => ({
    path: section.path,
    element:
      section.path === '/projects' ? (
        <ProjectsPage number={section.number} />
      ) : section.path === '/contacts' ? (
        <ContactsPage number={section.number} />
      ) : section.path === '/about' ? (
        <AboutPage number={section.number} />
      ) : (
        <SectionPage title={section.title} number={section.number} />
      ),
  })),
  {
    path: '/projects/:slug',
    element: <ProjectDetailPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
