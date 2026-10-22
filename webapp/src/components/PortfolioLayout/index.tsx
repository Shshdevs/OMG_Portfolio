import type { ReactNode } from 'react'
import styles from './index.module.scss'
import { Navigation } from '../Navigation'

type PortfolioLayoutProps = {
  children: ReactNode
  section?: boolean
}

export function PortfolioLayout({ children, section = false }: PortfolioLayoutProps) {
  return (
    <div className={styles.pageShell}>
      <main
        className={`${styles.portfolioFrame}${section ? ` ${styles.sectionPage}` : ''}`}
      >
        <div className={styles.gridBackdrop} aria-hidden="true" />
        <Navigation />
        {children}
      </main>
    </div>
  )
}
