import { Code2, Mail, MapPin, Send, BriefcaseBusiness } from 'lucide-react'
import styles from './index.module.scss'
import { Panel, PortfolioLayout, SectionNumber } from '../../components'
import { content } from '../../data'
import type { ContactItem } from '../../types'

const contactIcons = {
  mail: Mail,
  send: Send,
  github: Code2,
  location: MapPin,
  work: BriefcaseBusiness,
}

type ContactsPageProps = {
  number: string
}

function ContactMethod({ item }: { item: ContactItem }) {
  const Icon = contactIcons[item.icon]
  const contentBlock = (
    <>
      <span className={styles.iconWrap}>
        <Icon aria-hidden="true" />
      </span>
      <span className={styles.contactCopy}>
        <span className={styles.contactLabel}>{item.label}</span>
        <span className={styles.contactValue}>{item.value}</span>
      </span>
    </>
  )

  if (item.href) {
    return (
      <a className={styles.contactItem} href={item.href} rel="noreferrer" target={item.href.startsWith('mailto:') ? undefined : '_blank'}>
        {contentBlock}
      </a>
    )
  }

  return <div className={styles.contactItem}>{contentBlock}</div>
}

export function ContactsPage({ number }: ContactsPageProps) {
  const { contacts } = content

  return (
    <PortfolioLayout section>
      <div className={styles.contactsPage}>
        <Panel className={styles.contactsPanel}>
          <SectionNumber number={number} />
          <header className={styles.contactsHeader}>
            <h1>{contacts.title}</h1>
            <p>{contacts.intro}</p>
          </header>
          <div className={styles.contactGrid}>
            {contacts.items.map((item) => (
              <ContactMethod item={item} key={item.label} />
            ))}
          </div>
        </Panel>
      </div>
    </PortfolioLayout>
  )
}
