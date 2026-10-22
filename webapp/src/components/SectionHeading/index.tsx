import styles from './index.module.scss'
import { ArrowUpRight } from 'lucide-react'
import type { SectionHeadingProps } from '../../types'
import { SectionNumber } from '../SectionNumber'

type SectionHeadingWithVariantProps = SectionHeadingProps & {
  variant?: 'default' | 'motivation'
}

export function SectionHeading({
  number,
  title,
  id,
  showArrowUpRight = true,
  variant = 'default',
}: SectionHeadingWithVariantProps) {
  return (
    <div
      className={`${styles.sectionHeading}${variant === 'motivation' ? ` ${styles.motivation}` : ''}`}
      id={id}
    >
      <SectionNumber number={number} />
      <h2>{title}</h2>
      {showArrowUpRight && (
        <ArrowUpRight aria-hidden="true" className={styles.sectionSparkle} />
      )}
    </div>
  )
}
