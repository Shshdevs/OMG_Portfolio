import { MousePointer2, Sparkles } from 'lucide-react'
import type { CSSProperties } from 'react'
import styles from './index.module.scss'
import { content } from '../../data'
import { Panel } from '../Panel'
import avatar from '../../assets/avatar.jpg'

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
          <h1 id="hero-title" aria-label={`${profile.greeting} ${profile.name}`}>
            <span>{profile.greeting}</span>
            <span className={styles.typedName} aria-hidden="true">
              {[...profile.name].map((character, index) => (
                <span
                  aria-hidden="true"
                  className={styles.typedCharacter}
                  key={`${character}-${index}`}
                  style={{ '--character-delay': `${100 + index * 40}ms` } as CSSProperties}
                >
                  {character}
                </span>
              ))}
            </span>
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
        <div className={styles.portraitWrap}>
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
            <img
              className={styles.portraitImage}
              src={avatar}
              alt={profile.portraitLabel}
            />
          </div>
          <MousePointer2 aria-hidden="true" className={styles.portraitCursor} />
        </div>
      </Panel>
    </section>
  )
}
