import { Coffee } from '../../services/coffeeService'

export enum ActionTypes {
  ADD_OR_UPDATE_COFFEE_IN_CARD = 'ADD_OR_UPDATE_COFFEE_IN_CARD',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART',
}

export const coffeeReducerActions = {
  addOrUpdateCoffeeInCart: (coffee: Coffee, quantity: number) => {
    return {
      type: ActionTypes.ADD_OR_UPDATE_COFFEE_IN_CARD,
      payload: {
        coffee,
        quantity,
      },
    }
  },
  removeCoffeeFromCart: (coffee: Coffee) => {
    return {
      type: ActionTypes.REMOVE_COFFEE_FROM_CART,
      payload: {
        coffee,
      },
    }
  },
  removeAllFromCart: () => {
    return {
      type: ActionTypes.REMOVE_ALL_FROM_CART,
    }
  },
}
