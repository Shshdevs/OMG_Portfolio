import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import { content } from '../../data'
import type { Project } from '../../types'
import { Panel } from '../Panel'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { projects } = content

  return (
    <Panel className={styles.projectCard}>
      <Link
        aria-label={`${project.title}: ${projects.openProjectLabel}`}
        className={styles.cardLink}
        to={`/projects/${project.slug}`}
      >
        <span className={styles.cardHeading}>
          <span className={styles.title} role="heading" aria-level={2}>
            {project.title}
          </span>
          <span className={styles.category}>{project.category}</span>
        </span>
        <span className={styles.summary}>{project.summary}</span>
      </Link>
      <div className={styles.links}>
        {project.links.map((link) => (
          <a href={link.url} key={link.url} rel="noreferrer" target="_blank">
            {link.label}
            <ArrowUpRight aria-hidden="true" />
          </a>
        ))}
      </div>
    </Panel>
  )
}
