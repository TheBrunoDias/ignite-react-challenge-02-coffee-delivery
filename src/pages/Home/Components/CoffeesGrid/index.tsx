import { useQuery } from 'react-query'
import { coffeeService } from '../../../../services/coffeeService'
import { CoffeesGridContainer } from './style'
import { Typography } from '../../../../components/Typography'
import { CoffeeCard } from '../../../../components/CoffeeCard'

export function CoffeesGrid() {
  const { data: coffees } = useQuery({
    queryKey: ['coffees'],
    queryFn: coffeeService.list,
  })

  return (
    <>
      <Typography as="h2" variant="title-l" color="base-subtitle">
        Nossos Cafés
      </Typography>
      <CoffeesGridContainer>
        {coffees?.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeesGridContainer>
    </>
  )
}
