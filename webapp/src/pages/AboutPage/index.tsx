import styles from './index.module.scss'
import { Panel, PortfolioLayout, SectionNumber } from '../../components'
import { content } from '../../data'

type AboutPageProps = {
  number: string
}

export function AboutPage({ number }: AboutPageProps) {
  const { aboutPage } = content

  return (
    <PortfolioLayout section gridBackdrop="short">
      <div className={styles.aboutPage}>
        <Panel className={styles.aboutHero}>
          <SectionNumber number={number} />
          <header className={styles.aboutCopy}>
            <span className={styles.role}>{aboutPage.role}</span>
            <h1>{aboutPage.title}</h1>
            <div className={styles.description}>
              <p>{aboutPage.description}</p>
            </div>
          </header>
        </Panel>
        <section className={styles.participationSection}>
          <h2>{aboutPage.participationHeading}</h2>
          {aboutPage.participationCategories.map((category) => (
            <section className={styles.categoryGroup} key={category.heading}>
              <h3>{category.heading}</h3>
              <div className={styles.eventList}>
                {category.items.map((item) => (
                  <Panel className={styles.eventCard} key={item.title}>
                    <div className={styles.eventMeta}>
                      <span>{item.eyebrow}</span>
                      <span className={`${styles.status} ${styles[item.statusType]}`}>
                        {item.status}
                      </span>
                    </div>
                    <h4>{item.title}</h4>
                    {item.subtitle && <h5>{item.subtitle}</h5>}
                    <p className={styles.eventDescription}>{item.description}</p>
                    {item.result && <p className={styles.eventResult}>{item.result}</p>}
                    {item.stack && <p className={styles.eventStack}>{item.stack}</p>}
                  </Panel>
                ))}
              </div>
            </section>
          ))}
        </section>
      </div>
    </PortfolioLayout>
  )
}
