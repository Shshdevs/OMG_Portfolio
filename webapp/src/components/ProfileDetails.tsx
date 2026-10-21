import styles from '../styles/index.module.scss'
import { content } from '../data'
import { ActivityIcon } from './ActivityIcon'
import { Panel } from './Panel'
import { SectionHeading } from './SectionHeading'
import { TechnologyList } from './TechnologyList'

export function ProfileDetails() {
  const { profile } = content

  return (
    <section className={styles.detailsGrid} aria-label={profile.pageLabel}>
      <article className={styles.detailColumn}>
        <SectionHeading
          number={profile.sectionNumbers.about}
          title={profile.about.heading}
        />
        <Panel className={styles.aboutCard}>
          {profile.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <span className={styles.codeAccent}>──</span>
        </Panel>
      </article>

      <article className={styles.detailColumn}>
        <SectionHeading
          number={profile.sectionNumbers.technologies}
          title={profile.technologyHeading}
        />
        <Panel className={styles.technologyCard}>
          <TechnologyList technologies={content.technologies} />
        </Panel>
      </article>

      <article className={styles.detailColumn}>
        <SectionHeading
          number={profile.sectionNumbers.activities}
          title={profile.activitiesHeading}
        />
        <Panel className={styles.activityCard}>
          {content.activities.map((activity) => (
            <div className={styles.activityRow} key={activity.label}>
              <ActivityIcon name={activity.icon} />
              <p>{activity.label}</p>
            </div>
          ))}
        </Panel>
      </article>
    </section>
  )
}
