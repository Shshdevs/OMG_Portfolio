import styles from './index.module.scss'
import { content } from '../../data'
import { SectionHeading } from '../SectionHeading'

export function Motivation() {
  const { profile } = content

  return (
    <footer className={styles.motivationPanel}>
      <SectionHeading
        number={profile.sectionNumbers.motivation}
        title={profile.motivation.heading}
        showArrowUpRight={false}
        variant="motivation"
      />
      <p>{profile.motivation.quote}</p>
    </footer>
  )
}
