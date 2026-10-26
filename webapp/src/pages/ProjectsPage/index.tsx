import styles from './index.module.scss'
import { Sparkles } from 'lucide-react'
import { useState } from 'react'
import { Panel, PortfolioLayout, ProjectCard, SectionNumber } from '../../components'
import flower from '../../assets/flower.png'
import { content } from '../../data'

type ProjectsPageProps = {
  number: string
}

export function ProjectsPage({ number }: ProjectsPageProps) {
  const { projects } = content
  const [activeCategory, setActiveCategory] = useState(projects.categories[0])
  const availableCategories = projects.categories.filter(
    (category, index) =>
      index === 0 || projects.items.some((project) => project.category === category),
  )
  const visibleProjects =
    activeCategory === projects.categories[0]
      ? projects.items
      : projects.items.filter((project) => project.category === activeCategory)

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
            {availableCategories.map((category) => (
              <button
                className={`${styles.category}${activeCategory === category ? ` ${styles.selected}` : ''}`}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
                aria-pressed={activeCategory === category}
              >
                <span className={styles.categoryDot} />
                {category}
              </button>
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
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </PortfolioLayout>
  )
}
