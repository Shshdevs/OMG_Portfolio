import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { SectionPage } from '../pages/SectionPage'
import { content } from '../data'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  ...content.sections.map((section) => ({
    path: section.path,
    element: <SectionPage title={section.title} number={section.number} />,
  })),
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
