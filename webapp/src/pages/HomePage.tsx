import styles from '../styles/index.module.scss'
import { content } from '../data'
import { Navigation, ProfileDetails, ProfileHero, SectionHeading } from '../components'

export function HomePage() {
  const { profile } = content

  return (
    <div className={styles.pageShell}>
      <main className={styles.portfolioFrame}>
        <div className={styles.gridBackdrop} aria-hidden="true" />
        <Navigation />
        <ProfileHero />
        <ProfileDetails />
        <footer className={styles.motivationPanel}>
          <SectionHeading
            number={profile.sectionNumbers.motivation}
            title={profile.motivation.heading}
          />
          <p>{profile.motivation.quote}</p>
        </footer>
      </main>
    </div>
  )
}
