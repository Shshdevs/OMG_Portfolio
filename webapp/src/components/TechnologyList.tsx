import styles from '../styles/index.module.scss'
import { useLayoutEffect, useRef, useState } from 'react'
import { Ellipsis } from 'lucide-react'
import { content } from '../data'
import type { Technology } from '../types'
import { TechnologyTag } from './TechnologyTag'

type TechnologyListProps = {
  technologies: Technology[]
}

export function TechnologyList({ technologies }: TechnologyListProps) {
  const listRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLDivElement>(null)
  const [visibleCount, setVisibleCount] = useState(technologies.length)

  useLayoutEffect(() => {
    const list = listRef.current
    const measure = measureRef.current

    if (!list || !measure) return

    const updateVisibleCount = () => {
      const items = Array.from(measure.children) as HTMLElement[]
      const listBottom = list.getBoundingClientRect().bottom
      const fittingCount = items.filter(
        (item) => item.getBoundingClientRect().bottom <= listBottom + 1,
      ).length
      const nextCount =
        fittingCount < technologies.length
          ? Math.max(0, fittingCount - 1)
          : technologies.length

      setVisibleCount((currentCount) =>
        currentCount === nextCount ? currentCount : nextCount,
      )
    }

    const observer = new ResizeObserver(updateVisibleCount)
    observer.observe(list)
    observer.observe(measure)
    updateVisibleCount()

    return () => observer.disconnect()
  }, [technologies.length])

  const hasOverflow = visibleCount < technologies.length

  return (
    <>
      <div aria-hidden="true" className={styles.technologyMeasurement} ref={measureRef}>
        {technologies.map((technology) => (
          <TechnologyTag key={technology.name} {...technology} />
        ))}
      </div>
      <div className={styles.technologyList} ref={listRef}>
        {technologies.slice(0, visibleCount).map((technology) => (
          <TechnologyTag key={technology.name} {...technology} />
        ))}
        {hasOverflow && (
          <span
            className={`${styles.technologyTag} ${styles.moreTag}`}
            aria-label={content.labels.moreTechnologies}
          >
            <Ellipsis aria-hidden="true" />
          </span>
        )}
      </div>
    </>
  )
}
