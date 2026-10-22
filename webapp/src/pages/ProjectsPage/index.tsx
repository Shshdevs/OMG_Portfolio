import styles from './index.module.scss'
import { Sparkles } from 'lucide-react'
import { Panel, PortfolioLayout, ProjectCard, SectionNumber } from '../../components'
import flower from '../../assets/flower.png'
import { content } from '../../data'

type ProjectsPageProps = {
  number: string
}

export function ProjectsPage({ number }: ProjectsPageProps) {
  const { projects } = content

  return (
    <PortfolioLayout section>
      <section className={styles.projectsIntro}>
        <Panel className={styles.introPanel}>
          <div className={styles.headingLine}>
            <SectionNumber number={number} />
            <h1>
              {projects.headingLead}{' '}
              <span className={styles.typedTitle}>{projects.headingTyped}</span>
            </h1>
          </div>
          <p className={styles.subtitle}>{projects.subtitle}</p>
          <div className={styles.categories} aria-label={projects.categoriesLabel}>
            {projects.categories.map((category, index) => (
              <span
                className={`${styles.category}${index === 0 ? ` ${styles.selected}` : ''}`}
                key={category}
              >
                <span className={styles.categoryDot} />
                {category}
              </span>
            ))}
          </div>
        </Panel>
        <div className={styles.flowerFrame} aria-hidden="true">
          <div className={styles.flowerOrbit}>
            <Sparkles className={`${styles.orbitSparkle} ${styles.orbitSparkleFirst}`} />
            <Sparkles className={`${styles.orbitSparkle} ${styles.orbitSparkleSecond}`} />
          </div>
          <img className={styles.flowerImage} src={flower} alt="" />
        </div>
      </section>
      <section className={styles.projectGrid} aria-label={projects.listLabel}>
        {projects.items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </PortfolioLayout>
  )
}
