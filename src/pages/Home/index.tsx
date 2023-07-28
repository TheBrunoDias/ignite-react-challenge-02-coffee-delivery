import { Container } from '../../components/Container'
import { CoffeesGrid } from './Components/CoffeesGrid'
import { HomeHero } from './Components/Hero'

export default function Home() {
  return (
    <>
      <HomeHero />
      <Container>
        <CoffeesGrid />
      </Container>
    </>
  )
}
