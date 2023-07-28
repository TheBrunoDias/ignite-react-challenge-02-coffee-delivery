import { Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { QuantityCounter } from '../../../../components/QuantityCounter'
import { Typography } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import {
  CartAreaContainer,
  CartItemCard,
  DeleteButton,
  SubmitButton,
  TotalContainer,
} from './style'

export function CartArea() {
  const { colors } = useTheme()
  const { items, addOrUpdateCoffeeInCart, removeCoffeeFromCart, total } =
    useCart()

  const deliveryTax = 3.5

  return (
    <CartAreaContainer>
      {items.map(({ coffee, quantity }) => (
        <CartItemCard key={coffee.id}>
          <img src={coffee.image_url} alt={coffee.title} />
          <div>
            <Typography variant="text-m" color="base-subtitle">
              {coffee.title}
            </Typography>
            <div className="quantity-control">
              <QuantityCounter
                onDecreasing={(value: number) =>
                  addOrUpdateCoffeeInCart(coffee, value)
                }
                onIncreasing={(value: number) =>
                  addOrUpdateCoffeeInCart(coffee, value)
                }
                value={quantity}
                min={1}
              />
              <DeleteButton
                type="button"
                onClick={() => removeCoffeeFromCart(coffee)}
              >
                <Trash size={16} color={colors.purple} />
                <span>REMOVER</span>
              </DeleteButton>
            </div>
          </div>
          <Typography variant="text-m" weight={700} color="base-text">
            {new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              style: 'currency',
            }).format((coffee.price / 100) * quantity)}
          </Typography>
        </CartItemCard>
      ))}

      <TotalContainer>
        <div>
          <Typography variant="text-s">Total de itens</Typography>
          <Typography variant="text-s">
            {new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              style: 'currency',
            }).format(total / 100)}
          </Typography>
        </div>

        <div>
          <Typography variant="text-s">Entrega</Typography>
          <Typography variant="text-s">
            {new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              style: 'currency',
            }).format(deliveryTax)}
          </Typography>
        </div>

        <div>
          <Typography variant="text-l" weight={700} color="base-subtitle">
            Total
          </Typography>
          <Typography variant="text-l" weight={700} color="base-subtitle">
            {new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              style: 'currency',
            }).format(total / 100 + deliveryTax)}
          </Typography>
        </div>
      </TotalContainer>

      <SubmitButton type="submit">confirmar pedido</SubmitButton>
    </CartAreaContainer>
  )
}
