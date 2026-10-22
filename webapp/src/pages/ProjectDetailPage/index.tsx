import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import styles from './index.module.scss'
import { Panel, PortfolioLayout, TechnologyTag } from '../../components'
import { content } from '../../data'
import { NotFoundPage } from '../NotFoundPage'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = content.projects.items.find((item) => item.slug === slug)

  if (!project) return <NotFoundPage />

  return (
    <PortfolioLayout section>
      <div className={styles.projectPage}>
        <Link className={styles.backLink} to="/projects">
          <ArrowLeft aria-hidden="true" />
          {content.projects.detailBackLabel}
        </Link>
        <Panel className={styles.projectPanel}>
          <header className={styles.projectHeader}>
            <span className={styles.category}>{project.category}</span>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <div className={styles.projectLinks}>
              {project.links.map((link) => (
                <a href={link.url} key={link.url} rel="noreferrer" target="_blank">
                  {link.label}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </header>
          {project.screenshots && project.screenshots.length > 0 && (
            <section className={styles.gallery} aria-label={content.projects.screenshotLabel}>
              {project.screenshots.map((screenshot) => (
                <img key={screenshot.src} src={screenshot.src} alt={screenshot.alt} />
              ))}
            </section>
          )}
          <section className={styles.technologies}>
            <h2>{content.projects.technologyLabel}</h2>
            <div>
              {project.technologies.map((technology) => (
                <TechnologyTag key={technology} name={technology} />
              ))}
            </div>
          </section>
          <section className={styles.contributions}>
            <h2>{content.projects.contributionLabel}</h2>
            <ul>
              {project.contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </section>
          {project.note && <p className={styles.note}>{project.note}</p>}
        </Panel>
      </div>
    </PortfolioLayout>
  )
}
