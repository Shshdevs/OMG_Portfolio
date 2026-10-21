import styles from '../styles/index.module.scss'
import { ArrowUpRight } from 'lucide-react'
import type { SectionHeadingProps } from '../types'

export function SectionHeading({ number, title, id }: SectionHeadingProps) {
  return (
    <div className={styles.sectionHeading} id={id}>
      <span className={styles.sectionNumber}>[ {number} ]</span>
      <h2>{title}</h2>
      <ArrowUpRight aria-hidden="true" className={styles.sectionSparkle} />
    </div>
  )
}
