import styles from './index.module.scss'
import { NavLink } from 'react-router-dom'
import { content } from '../../data'

export function Navigation() {
  return (
    <header className={styles.siteHeader}>
      <NavLink
        className={styles.siteBrand}
        to="/"
        aria-label={`${content.profile.brand} — главная`}
      >
        <span className={styles.brandIndex}>[ {content.profile.heroNumber} /</span>
        <span>{content.profile.brandTitle}</span>
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
