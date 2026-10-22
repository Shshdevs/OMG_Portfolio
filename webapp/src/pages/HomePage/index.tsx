import {
  Motivation,
  PortfolioLayout,
  ProfileDetails,
  ProfileHero,
} from '../../components'

export function HomePage() {
  return (
    <PortfolioLayout>
      <ProfileHero />
      <ProfileDetails />
      <Motivation />
    </PortfolioLayout>
  )
}
