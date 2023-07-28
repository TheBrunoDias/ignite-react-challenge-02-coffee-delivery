import { Coffee } from 'phosphor-react'
import { EmptyCartContainer, LinkButton } from './style'
import { useTheme } from 'styled-components'
import { Typography } from '../../../../components/Typography'

export function EmptyCart() {
  const { colors } = useTheme()
  return (
    <EmptyCartContainer>
      <Coffee weight="duotone" size={100} color={colors.purple} />
      <Typography variant="title-m" color="purple">
        Nenhum cafézinho no carrinho ainda?
      </Typography>
      <div>
        <Typography variant="text-m" color="base-label">
          Acreditamos que todo mundo merece um bom café! Explore nossas opções e
          preencha seu carrinho com a bebida perfeita para você.
        </Typography>
      </div>
      <LinkButton to="/">CONFERIR PRODUTOS</LinkButton>
    </EmptyCartContainer>
  )
}
