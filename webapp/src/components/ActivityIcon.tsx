import { Box, BrainCircuit, Heart, Monitor, Smartphone } from 'lucide-react'
import styles from '../styles/index.module.scss'
import type { ActivityItem } from '../types'

const activityIcons = {
  monitor: Monitor,
  brain: BrainCircuit,
  phone: Smartphone,
  cube: Box,
  heart: Heart,
}

type ActivityIconProps = {
  name: ActivityItem['icon']
}

export function ActivityIcon({ name }: ActivityIconProps) {
  const Icon = activityIcons[name]

  return <Icon aria-hidden="true" className={styles.activityIcon} strokeWidth={1.5} />
}
