import styles from '../styles/index.module.scss'
import { Link } from 'react-router-dom'
import { content } from '../data'

export function NotFoundPage() {
  return (
    <main className={styles.notFoundPage}>
      <span className={styles.sectionNumber}>[ {content.messages.notFoundNumber} ]</span>
      <h1>{content.messages.notFoundTitle}</h1>
      <Link className={styles.backLink} to="/">
        {content.messages.homeLink}
      </Link>
    </main>
  )
}
