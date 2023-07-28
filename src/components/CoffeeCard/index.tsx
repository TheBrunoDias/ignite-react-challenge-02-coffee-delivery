import { ShoppingCart, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Coffee } from '../../services/coffeeService'
import { QuantityCounter } from '../QuantityCounter'
import { Typography } from '../Typography'
import {
  CartButton,
  CategoryContainer,
  CoffeeCardContainer,
  DeleteButton,
} from './style'
import { useCart } from '../../hooks/useCart'
import Notiflix from 'notiflix'

interface ICoffeeCard {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: ICoffeeCard) {
  const {
    addOrUpdateCoffeeInCart,
    getCoffeeQuantityInCart,
    removeCoffeeFromCart,
  } = useCart()
  const [quantity, setQuantity] = useState(getCoffeeQuantityInCart(coffee))

  const initialQuantity = getCoffeeQuantityInCart(coffee)
  const isCartButtonDisabled = quantity === 0 || quantity === initialQuantity

  const formatterPrice = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(coffee.price / 100)

  function handleRemoveFromCart() {
    removeCoffeeFromCart(coffee)
    Notiflix.Notify.info('Café removido do carrinho')
  }

  function handleAddOrUptadeCart() {
    addOrUpdateCoffeeInCart(coffee, quantity)

    if (initialQuantity === 0) {
      Notiflix.Notify.success('Café adicionado ao carrinho')
    } else {
      Notiflix.Notify.info('Café atualizado no carrinho')
    }
  }

  return (
    <CoffeeCardContainer>
      <img src={coffee.image_url} alt={coffee.title} />

      <CategoryContainer>
        {coffee.categories.map((category) => (
          <div className="category-tag" key={category}>
            <Typography variant="tag" color="yellow-dark">
              {category}
            </Typography>
          </div>
        ))}
      </CategoryContainer>

      <Typography as="strong" variant="title-s" color="base-subtitle">
        {coffee.title}
      </Typography>

      <Typography as="p" variant="text-s" color="base-label">
        {coffee.description}
      </Typography>

      <footer>
        <div className="price-container">
          <Typography variant="text-s">R$ </Typography>
          <Typography variant="title-m">{formatterPrice}</Typography>
        </div>
        <div className="cart-container">
          <QuantityCounter
            min={0}
            value={quantity}
            onDecreasing={setQuantity}
            onIncreasing={setQuantity}
          />
          {initialQuantity !== 0 && quantity === 0 ? (
            <DeleteButton
              onClick={handleRemoveFromCart}
              type="button"
              title="Remover do carrinho"
            >
              <Trash weight="fill" size={22} />
            </DeleteButton>
          ) : (
            <CartButton
              disabled={isCartButtonDisabled}
              onClick={handleAddOrUptadeCart}
              type="button"
              title={'Adicionar ao carrinho'}
            >
              <ShoppingCart weight="fill" size={22} />
            </CartButton>
          )}
        </div>
      </footer>
    </CoffeeCardContainer>
  )
}
