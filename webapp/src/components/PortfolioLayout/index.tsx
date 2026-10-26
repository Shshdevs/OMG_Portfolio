import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './index.module.scss'
import { Navigation } from '../Navigation'

type PortfolioLayoutProps = {
  children: ReactNode
  section?: boolean
  gridBackdrop?: 'default' | 'short'
}

export function PortfolioLayout({
  children,
  section = false,
  gridBackdrop = 'default',
}: PortfolioLayoutProps) {
  const { pathname } = useLocation()

  return (
    <div className={styles.pageShell}>
      <main
        className={`${styles.portfolioFrame}${section ? ` ${styles.sectionPage}` : ''}`}
      >
        <div
          className={`${styles.gridBackdrop}${gridBackdrop === 'short' ? ` ${styles.shortGridBackdrop}` : ''}`}
          aria-hidden="true"
        />
        <Navigation />
        <div className={styles.routeContent} key={pathname}>
          {children}
        </div>
      </main>
    </div>
  )
}
