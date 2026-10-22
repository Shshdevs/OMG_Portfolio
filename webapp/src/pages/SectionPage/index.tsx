import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import { Panel, PortfolioLayout, SectionNumber } from '../../components'
import { content } from '../../data'

type SectionPageProps = {
  title: string
  number: string
}

export function SectionPage({ title, number }: SectionPageProps) {
  return (
    <PortfolioLayout section>
      <Panel className={styles.sectionPlaceholder}>
        <SectionNumber number={number} />
        <h1>{title}</h1>
        <p>{content.messages.sectionPlaceholder}</p>
        <Link className={styles.backLink} to="/">
          {content.messages.sectionBackLink}
        </Link>
      </Panel>
    </PortfolioLayout>
  )
}
