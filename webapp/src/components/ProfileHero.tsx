import { MousePointer2, Sparkles } from 'lucide-react'
import styles from '../styles/index.module.scss'
import { content } from '../data'
import { Panel } from './Panel'

export function ProfileHero() {
  const { profile } = content

  return (
    <section className={styles.heroSection} aria-labelledby="hero-title">
      <Panel className={styles.introCard}>
        <div className={styles.windowControls} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className={styles.heroNumber}>[ {profile.heroNumber} ]</span>
        <div className={styles.introCopy}>
          <h1 id="hero-title">
            {profile.greeting} <span>{profile.name}</span>
          </h1>
          <p className={styles.heroDescription}>{profile.description}</p>
          <div className={styles.interestPills} aria-label={profile.interestsLabel}>
            {profile.interests.map(({ label, featured = false }) => (
              <span
                className={`${styles.interestPill}${featured ? ` ${styles.isDark}` : ''}`}
                key={label}
              >
                <i />
                {label}
              </span>
            ))}
          </div>
        </div>
        <div
          className={styles.portraitWrap}
          aria-label={profile.portraitLabel}
          role="img"
        >
          <div className={styles.portraitOrbit}>
            <Sparkles
              aria-hidden="true"
              className={`${styles.orbitSparkle} ${styles.orbitSparkleFirst}`}
            />
            <Sparkles
              aria-hidden="true"
              className={`${styles.orbitSparkle} ${styles.orbitSparkleSecond}`}
            />
          </div>
          <div className={styles.portrait}>
            <span>{profile.portraitInitials}</span>
          </div>
          <MousePointer2 aria-hidden="true" className={styles.portraitCursor} />
        </div>
      </Panel>
    </section>
  )
}
