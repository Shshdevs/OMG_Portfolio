import { Image } from 'lucide-react'
import styles from './index.module.scss'
import { Panel, PortfolioLayout, SectionNumber } from '../../components'
import { content } from '../../data'

type AboutPageProps = {
  number: string
}

export function AboutPage({ number }: AboutPageProps) {
  const { aboutPage, profile } = content

  return (
    <PortfolioLayout section>
      <div className={styles.aboutPage}>
        <Panel className={styles.aboutHero}>
          <SectionNumber number={number} />
          <div className={styles.photoPlaceholder} aria-label={aboutPage.photoPlaceholder}>
            <Image aria-hidden="true" />
            <span>{aboutPage.photoPlaceholder}</span>
          </div>
          <header className={styles.aboutCopy}>
            <span className={styles.role}>{aboutPage.role}</span>
            <h1>{aboutPage.title}</h1>
            <div className={styles.description}>
              {profile.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </header>
        </Panel>
        <section className={styles.participationSection}>
          <h2>{aboutPage.participationHeading}</h2>
          <Panel className={styles.participationCard}>
            <span className={styles.eventLabel}>{aboutPage.participationHeading}</span>
            <h3>{aboutPage.participationTitle}</h3>
            <p>{aboutPage.participationSummary}</p>
            <div className={styles.contribution}>
              <h4>{aboutPage.participationWorkHeading}</h4>
              <p>{aboutPage.participationWork}</p>
            </div>
          </Panel>
        </section>
      </div>
    </PortfolioLayout>
  )
}
