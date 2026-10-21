import styles from '../styles/index.module.scss'
import type { Technology } from '../types'

export function TechnologyTag({ name, featured = false }: Technology) {
  return (
    <span className={`${styles.technologyTag}${featured ? ` ${styles.isFeatured}` : ''}`}>
      {name}
    </span>
  )
}
