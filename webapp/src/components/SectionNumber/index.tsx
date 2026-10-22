import styles from './index.module.scss'

type SectionNumberProps = {
  number: string
}

export function SectionNumber({ number }: SectionNumberProps) {
  return <span className={styles.sectionNumber}>[ {number} ]</span>
}
