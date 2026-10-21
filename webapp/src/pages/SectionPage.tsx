import styles from '../styles/index.module.scss'
import { Link } from 'react-router-dom'
import { Navigation, Panel } from '../components'
import { content } from '../data'

type SectionPageProps = {
  title: string
  number: string
}

export function SectionPage({ title, number }: SectionPageProps) {
  return (
    <div className={styles.pageShell}>
      <main className={`${styles.portfolioFrame} ${styles.sectionPage}`}>
        <Navigation />
        <Panel className={styles.sectionPlaceholder}>
          <span className={styles.sectionNumber}>[ {number} ]</span>
          <h1>{title}</h1>
          <p>{content.messages.sectionPlaceholder}</p>
          <Link className={styles.backLink} to="/">
            {content.messages.sectionBackLink}
          </Link>
        </Panel>
      </main>
    </div>
  )
}
