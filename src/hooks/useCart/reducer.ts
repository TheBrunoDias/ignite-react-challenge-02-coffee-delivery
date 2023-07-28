import { produce } from 'immer'
import { Coffee } from '../../services/coffeeService'
import { ActionTypes } from './actions'

interface CartState {
  total_items: number
  quantity: number
  items: {
    coffee: Coffee
    quantity: number
  }[]
}

export function cartReducer(state: CartState, action: any) {
  const { coffee, quantity } = action.payload ?? {}
  switch (action.type) {
    case ActionTypes.ADD_OR_UPDATE_COFFEE_IN_CARD: {
      const coffeIndex = state.items.findIndex(
        (item) => item.coffee.id === action.payload.coffee.id,
      )
      return produce(state, (draft) => {
        if (coffeIndex < 0) {
          draft.items.push({ coffee, quantity })
        } else {
          draft.items[coffeIndex].quantity = quantity
        }

        const { total, totalQuantity } = draft.items.reduce(
          (prev, curr) => {
            prev.total += curr.coffee.price * curr.quantity
            prev.totalQuantity += curr.quantity
            return prev
          },
          { total: 0, totalQuantity: 0 },
        )

        draft.quantity = totalQuantity
        draft.total_items = total
      })
    }
    case ActionTypes.REMOVE_COFFEE_FROM_CART: {
      const coffeIndex = state.items.findIndex(
        (item) => item.coffee.id === action.payload.coffee.id,
      )
      if (coffeIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.items.splice(coffeIndex, 1)

        const { total, totalQuantity } = draft.items.reduce(
          (prev, curr) => {
            prev.total += curr.coffee.price * curr.quantity
            prev.totalQuantity += curr.quantity
            return prev
          },
          { total: 0, totalQuantity: 0 },
        )

        draft.quantity = totalQuantity
        draft.total_items = total
      })
    }
    case ActionTypes.REMOVE_ALL_FROM_CART: {
      return {
        quantity: 0,
        total_items: 0,
        items: [],
      }
    }
    default:
      return state
  }
}
