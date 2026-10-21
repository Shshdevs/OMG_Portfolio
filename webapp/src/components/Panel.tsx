import styles from '../styles/index.module.scss'
import type { PanelProps } from '../types'

export function Panel({ children, className = '' }: PanelProps) {
  return <div className={`${styles.panel} ${className}`.trim()}>{children}</div>
}
