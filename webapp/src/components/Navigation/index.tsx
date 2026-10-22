import styles from './index.module.scss'
import { NavLink, useLocation } from 'react-router-dom'
import { content } from '../../data'

export function Navigation() {
  const { pathname } = useLocation()
  const currentSection = content.sections.find((section) => section.path === pathname)
  const currentNavigationItem = content.navigation.find((item) => item.to === pathname)
  const projectSlug = pathname.startsWith('/projects/') ? pathname.split('/')[2] : undefined
  const currentProject = content.projects.items.find((project) => project.slug === projectSlug)
  const projectsSection = content.sections.find((section) => section.path === '/projects')
  const currentTitle =
    currentProject?.title ??
    currentSection?.title ??
    currentNavigationItem?.label ??
    content.profile.brandTitle
  const currentNumber = currentProject
    ? (projectsSection?.number ?? content.profile.heroNumber)
    : (currentSection?.number ?? content.profile.heroNumber)

  return (
    <header className={styles.siteHeader}>
      <NavLink
        className={styles.siteBrand}
        to="/"
        aria-label={`${content.profile.brand} — главная`}
      >
        <span className={styles.brandIndex}>[ {currentNumber} /</span>
        <span>{currentTitle}</span>
        <span className={styles.brandIndex}>]</span>
      </NavLink>
      <nav className={styles.mainNav} aria-label={content.labels.mainNavigation}>
        {content.navigation.map((item) => (
          <NavLink
            className={({ isActive }) =>
              `${styles.navLink}${isActive ? ` ${styles.isActive}` : ''}`
            }
            end={item.end}
            key={item.to}
            to={item.to}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
