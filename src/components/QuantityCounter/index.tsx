import { Minus, Plus } from 'phosphor-react'
import { QuantityCounterContainer } from './style'
import { Typography } from '../Typography'

interface IQuantityCounter {
  onIncreasing: (value: number) => void
  onDecreasing: (value: number) => void
  min?: number
  max?: number
  value: number
}

export function QuantityCounter({
  min = 1,
  value,
  max,
  onDecreasing,
  onIncreasing,
}: IQuantityCounter) {
  function handleDescreasing() {
    if (value === min) return

    onDecreasing(value - 1)
  }

  function handleIncreasing() {
    if (value === max) return

    onIncreasing(value + 1)
  }

  return (
    <QuantityCounterContainer>
      <button
        disabled={value === min}
        type="button"
        onClick={handleDescreasing}
      >
        <Minus size={14} />
      </button>
      <Typography variant="text-m" color="base-title">
        {value}
      </Typography>
      <button disabled={value === max} type="button" onClick={handleIncreasing}>
        <Plus size={14} />
      </button>
    </QuantityCounterContainer>
  )
}
