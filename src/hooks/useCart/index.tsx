import { createContext, useContext, useEffect, useReducer } from 'react'
import { Coffee } from '../../services/coffeeService'
import { coffeeReducerActions } from './actions'
import { cartReducer } from './reducer'

interface ICartContext {
  total: number
  quantity: number
  items: {
    coffee: Coffee
    quantity: number
  }[]
  addOrUpdateCoffeeInCart(coffee: Coffee, quantity: number): void
  removeCoffeeFromCart(coffee: Coffee): void
  clearCart(): void
  getCoffeeQuantityInCart(coffee: Coffee): number
}

interface ICartContextProvider {
  children: React.ReactNode
}

const CartContext = createContext({} as ICartContext)

export function CartContextProvider({ children }: ICartContextProvider) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      total_items: 0,
      quantity: 0,
      items: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite:coffee-delivery-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return initialState
    },
  )

  const { items, total_items: totalItems, quantity } = cartState

  function addOrUpdateCoffeeInCart(coffee: Coffee, quantity: number) {
    dispatch(coffeeReducerActions.addOrUpdateCoffeeInCart(coffee, quantity))
  }

  function removeCoffeeFromCart(coffee: Coffee) {
    dispatch(coffeeReducerActions.removeCoffeeFromCart(coffee))
  }

  function clearCart() {
    dispatch(coffeeReducerActions.removeAllFromCart())
  }

  function getCoffeeQuantityInCart(coffee: Coffee) {
    return items.find((i) => i.coffee.id === coffee.id)?.quantity ?? 0
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@ignite:coffee-delivery-1.0.0', stateJSON)
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        items,
        quantity,
        total: totalItems,
        addOrUpdateCoffeeInCart,
        removeCoffeeFromCart,
        clearCart,
        getCoffeeQuantityInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
