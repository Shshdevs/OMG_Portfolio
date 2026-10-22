import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { content } from '../../data'
import { SectionNumber } from '../../components'

export function NotFoundPage() {
  return (
    <main className={styles.notFoundPage}>
      <SectionNumber number={content.messages.notFoundNumber} />
      <h1>{content.messages.notFoundTitle}</h1>
      <Link className={styles.backLink} to="/">
        {content.messages.homeLink}
      </Link>
    </main>
  )
}
